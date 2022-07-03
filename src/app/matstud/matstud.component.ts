import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-matstud',
  templateUrl: './matstud.component.html',
  styleUrls: ['./matstud.component.css']
})
export class MatstudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  refresh(){
    this.router.navigate(['/home']);
  }
}
