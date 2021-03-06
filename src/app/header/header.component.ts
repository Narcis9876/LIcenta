import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
private userSub:Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.userSub=this.authService.user.subscribe(user=>{

    });
  }
  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }
  logout(){
    this.authService.logout();
  }

}
