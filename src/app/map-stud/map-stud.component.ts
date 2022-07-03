import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import * as Map from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { map, Observable, timer } from 'rxjs';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
@Component({
  selector: 'app-map-stud',
  templateUrl: './map-stud.component.html',
  styleUrls: ['./map-stud.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapStudComponent implements OnInit {

  private map:any;
public clicked=true;
public wheather:any;
  private aa;
 public url;
  // lat: number= navigator.geolocation.watchPosition((succes)=>{
  //   return succes.coords.latitude});
//  lon: number=navigator.geolocation.watchPosition((succes)=>{
//   return succes.coords.longitude});
lat:number=47.1891617003;
lon:number=27.5625908251;
latF = 47.1751986;
 lonF =27.5732772;

 dateTime:Observable<Date>;

  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.getLocationWheather();
    this.fetchWheater();
this.initMap();
    this.getLocation().then(resp=>{
      this.lat=resp.lat;
      this.lon=resp.lon;
      console.log(this.lat, this.lon);

    })
    this.dateTime= timer(0,1000).pipe(map(()=>{
      return new Date();
    }));

  }
getLocation():Promise<any>{
  return new Promise((resolve, reject)=>{
    navigator.geolocation.watchPosition(resp=>{
      resolve({lat:resp.coords.latitude,lon:resp.coords.longitude});
      reject('Locatia nu poate fi gasita');
    });
  })
}
  private initMap(): void {

    var iconDefault = Map.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    Map.Marker.prototype.options.icon = iconDefault;

    //configurarea mapei
    this.map = Map.map('map', {
      center: [	this.latF, this.lonF],
      attributionControl: false,
      zoom: 15,

    });
    const markerFeaa = Map.marker([47.1751986, 27.5732772]).bindPopup('Facultate');
    markerFeaa.addTo(this.map);
    const markerCamin = Map.marker([47.1891617003, 27.5625908251]).bindPopup('Camin');
    markerCamin.addTo(this.map);

    //Titlurile
    const tiles = Map.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    });

    // //forma de cerc de la locatia curenta
    // const mark = Map.circleMarker([this.lat, this.lon]).addTo(this.map);
    // mark.addTo(this.map);


    //ruta

    tiles.addTo(this.map);

  }
  feaa(){
this.clicked=false;
this.latF=47.1751986;
this.lonF=27.5732772;
Map.Routing.control({
  router: Map.Routing.osrmv1({
    serviceUrl: `https://router.project-osrm.org/route/v1/`
  }),
  showAlternatives: false,
  fitSelectedRoutes: true,
  show: true,
  routeWhileDragging: true,
  waypoints: [ Map.latLng(this.lat, this.lon),
    Map.latLng(this.latF, this.lonF)

  ]
}).addTo(this.map);
}
gasesteLocatia(){


  Map.Routing.control({
    router: Map.Routing.osrmv1({
      serviceUrl: `https://router.project-osrm.org/route/v1/`
    }),
    showAlternatives: false,
    fitSelectedRoutes: true,
    show: false,
    routeWhileDragging: false,
    waypoints: [
      Map.latLng(this.lat, this.lon),
      Map.latLng(this.lat+0, this.lon+0)
    ]
  }).addTo(this.map);

}

gasesteCaminul(){
this.clicked=false;
  Map.Routing.control({
    router: Map.Routing.osrmv1({
      serviceUrl: `https://router.project-osrm.org/route/v1/`
    }),
    showAlternatives: true,
    fitSelectedRoutes: true,
    show: true,
    routeWhileDragging: true,
    waypoints:[
      Map.latLng(this.lat,this.lon),
      Map.latLng(47.1891617003, 27.5625908251)
    ]

  }).addTo(this.map);
}

retry(){
  location.reload();
}


fetchWheater(){

   return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=47.17&lon=27.57&appid=9a3d8c5add0ab43a8d75d77623417432').subscribe(responseData=>{

    this.wheather=responseData||JSON;
    this.aa=this.wheather.weather[0].icon;
    this.url= "http://openweathermap.org/img/w/" + this.aa+ ".png";


  })
  }
  getLocationWheather(){
    if('geolocation' in navigator){
      navigator.geolocation.watchPosition((succes)=>{
        this.lat=succes.coords.latitude;
        this.lon=succes.coords.longitude;
        this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=9a3d8c5add0ab43a8d75d77623417432`).subscribe(responseData=>{
          this.wheather=responseData||JSON;
          this.aa=this.wheather.weather[0].icon;
          this.url= "http://openweathermap.org/img/w/" + this.aa+ ".png";
        })
      })
    }
  }


}




