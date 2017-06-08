import { StackLayout } from 'ui/layouts/stack-layout';
export declare class MapboxNavigation extends StackLayout {
    private navigation;
    private locationEngine;
    private mapView;
    constructor();
    createNativeView(): any;
    initMapNavigation(): void;
}
