import { StackLayout } from 'ui/layouts/stack-layout';

declare const android, com, java, org: any;

export class MapboxNavigation extends StackLayout {
  private navigation: any
  private locationEngine: any
  private mapView: any

  constructor() {
    console.log('Initialize constructor')
    console.log(JSON.stringify(com))
    super()
    this.initMapNavigation()
  }

  public createNativeView() {
    console.log('Creating native view')
    this.nativeView = new android.widget.FrameLayout(this._context)
    setTimeout(() => {
      this.initMapNavigation()
    }, 0)

    return this.nativeView
  }
  
  initMapNavigation() {
    
    console.log('Initializing initMapnavigation')
    
    let accessToken = 'pk.eyJ1Ijoia2F1cmFnMDA3IiwiYSI6ImNpeW03cHZjNzAwMzMzM2w3MjZsMjFkb3AifQ.3fDvF714qVeY8K44oXLY1w'
 
    this.navigation = com.mapbox.services.android.navigation.v5.MapboxNavigation(this._context, accessToken)
    
    let origin = com.mapbox.services.commons.models.Position.fromLatLng(38.90992, -77.03613)
    let destination = com.mapbox.services.commons.models.Position.fromLatLng(38.8977, -77.0365)

    setTimeout(() => {
        this.navigation.getRoute(origin, destination, () => {
        console.log('getRoute')
        })
    }, 5000)
  }
  
}