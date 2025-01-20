import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from './../../environments/environment';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('map') mapRef!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit() {
    this.createMap();
  }

  async createMap() {
    // Create map, initially focused on Los Angeles
    const myMap = await GoogleMap.create({
      id: 'my-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    }, (data) => console.log('Map Ready', data));
  }

}
