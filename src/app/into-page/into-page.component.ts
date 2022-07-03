import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-into-page',
  templateUrl: './into-page.component.html',
  styleUrls: ['./into-page.component.scss','./index.scss']
})
export class IntoPageComponent implements OnInit {

  isLogged=false;
  constructor() { }

  ngOnInit(): void {
  }

}
