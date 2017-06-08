import {Observable} from 'data/observable';
// import {MapboxNavigation} from 'nativescript-mapbox-navigation';

export class HelloWorldModel extends Observable {
  public message: string;
  // private mapboxNavigation: MapboxNavigation;

  constructor() {
    super();
  }
}