
import {  HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {

  public wheather:any;
  private aa;
 public url;
  public lat;
  public lon;
  constructor(private http:HttpClient) { }
  public year: number = new Date().getFullYear();

  dateTime:Observable<Date>;

  ngOnInit(): void {
    this.getLocation();
     this.fetchWheater();

    this.dateTime= timer(0,1000).pipe(map(()=>{
       return new Date();
     }));
  }


  fetchWheater(){

  return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=47.17&lon=27.57&appid=9a3d8c5add0ab43a8d75d77623417432').subscribe(responseData=>{

    this.wheather=responseData||JSON;
    this.aa=this.wheather.weather[0].icon;
    this.url= "http://openweathermap.org/img/w/" + this.aa+ ".png";


  })
  }
  getLocation(){
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




