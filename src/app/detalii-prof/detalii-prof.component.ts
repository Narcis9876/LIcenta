import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalii-prof',
  templateUrl: './detalii-prof.component.html',
  styleUrls: ['./detalii-prof.component.css']
})
export class DetaliiProfComponent implements OnInit {

  afisare=false;
  constructor() { }

  ngOnInit(): void {
  }
  afiseaza(){
this.afisare=!this.afisare;
  }

}
