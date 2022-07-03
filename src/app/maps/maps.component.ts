import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleMap, MapDirectionsService, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { map, Observable } from 'rxjs';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapsComponent implements OnInit {

public findFac:boolean=false;
public findAt:boolean=false;
infoContent = '';

  directionsResults$: Observable<google.maps.DirectionsResult|undefined>;
  ngOnInit(): void {

  }
  @ViewChild(GoogleMap, { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;
  constructor(mapDirectionsService: MapDirectionsService){
    const request: google.maps.DirectionsRequest = {
      destination: this.marker.position,
      origin: this.marker1.position,
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
  }
  imageF =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
image="https://maps.google.com/mapfiles/kml/shapes/library_maps.png";

  mapOptions: google.maps.MapOptions = {
    center: { lat: 	(47.1891617003+47.1751986)/2, lng: (27.5625908251+27.5732772)/2 },
    zoom : 15
 }
 marker = {
    position: {lat: 	47.1751986, lng: 27.5732772} ,title: 'Marker title ' ,
    info: 'Marker info ',
    options: {
      animation: google.maps.Animation.BOUNCE,
    },
 }
 marker1 = {
  position: {lat:47.1891617003, lng:  27.5625908251}, title: 'Pozitia ta ' ,info: 'Pozitia ta',
  options: {
    animation: google.maps.Animation.BOUNCE,
  },
  icon:this.image
}
 options: google.maps.MapOptions = {

  disableDefaultUI: true, zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false
}
markers=[this.marker1];



findFeaa(){
// this.markers.push(this.marker);
if(!this.findFac){
  this.markers.push({
      position: {lat: 	47.1751986, lng: 27.5732772},
    title: 'FEAA ',
    info: 'FEAA info ' + (this.markers.length + 1),
    options: {
      animation:google.maps.Animation.DROP
    },icon:this.imageF
  });
  this.findFac=true;
}
else if(this.findFac){
  this.markers.pop();
  this.findFac=false;
}
}


openInfo(marker: MapMarker, content: string) {
  this.infoContent = content;
  this.info.open(marker)
}

markers1:any[]=[{ position: {lat:47.1783981, lng:27.5669498},
  title: 'Parcul Copou',
  info: 'Parcul Copou ' + (this.markers.length + 1),
  options: {
    animation:google.maps.Animation.BOUNCE
  },icon:this.imageF},
  { position: {lat:47.192279, lng:27.550907},
  title: 'Parcul Copou',
  info: 'Parcul Copou ' + (this.markers.length + 1),
  options: {
    animation:google.maps.Animation.DROP
  },icon:this.imageF}

]


findAtr(){
  // this.markers.push(this.marker);
  if(!this.findAt){

    for(let i=0; i<this.markers1.length;i++)
    {
            this.markers.push(this.markers1[i]);
    }

    this.findAt=true;
  }
  else if(this.findAt){
    while(this.markers.length>1){
      this.markers.pop();
    }
    this.findAt=false;
  }
  }

}

