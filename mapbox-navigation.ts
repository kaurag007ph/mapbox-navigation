import { View } from 'ui/core/view';

declare const android, com, java, org, retrofit2: any;

let accessToken: any

export class MapboxNavigation extends View {
  private navigation: any
  private locationEngine: any
  private mapView: any

  public createNativeView() {
    this.nativeView = new android.widget.FrameLayout(this._context)
    setTimeout(() => {
      this.initMapNavigation()
    }, 0)

    return this.nativeView
  }
  
  initMapNavigation() {
      console.log('Initializing initMapnavigation')

      this.navigation = new com.mapbox.services.android.navigation.v5.MapboxNavigation(this._context, accessToken)
      let origin = new com.mapbox.services.commons.models.Position.fromCoordinates(-79.44697773502429,43.65536978525574)
      let destination = new com.mapbox.services.commons.models.Position.fromCoordinates(-79.44697773502844,43.6570908328672)

      this.locationEngine = com.mapbox.mapboxsdk.location.LocationSource.getLocationEngine(this._context);
      
      this.navigation.getRoute(origin, destination, new retrofit2.Callback({
        onResponse: (call, response) => {
          let route = response.body().getRoutes().get(0)

          this.locationEngine.setPriority(com.mapbox.services.android.telemetry.location.LocationEnginePriority.HIGH_ACCURACY)
          this.locationEngine.setFastestInterval(1000)
          this.locationEngine.activate()

          this.navigation.setLocationEngine(this.locationEngine)
          this.navigation.startNavigation(route);
        },
        onFailure: function(error) {
          console.log('onFailure', error)
        }
      }))
  }
}