import { Component, OnInit } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dateTime:Observable<Date>;

  constructor() { }
  ngOnInit(): void {
    this.dateTime= timer(0,1000).pipe(map(()=>{
      return new Date();
    }));
  }



}
