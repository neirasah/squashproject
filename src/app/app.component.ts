import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  template: `<div>
  <nav class='navbar navbar-default'>
  
              <div class='container-fluid'>
  
                  <a class='navbar-brand'>{{pageTitle}}</a>
  
                  <ul class='nav navbar-nav'>
  
                      <li><a [routerLink]="['/welcome']">Home</a></li>
  
                      <li><a [routerLink]="['/clubs']">Squash clubs</a></li>
                      <li><a *ngIf="!auth.isAuthenticated()" [routerLink]="['user/login']">Login</a></li>                      
                      <li><a *ngIf="auth.isAuthenticated()" [routerLink]="['user/profile']">Welcome {{auth.currentUser?.firstName}}</a></li>  
                  </ul>
  
              </div>
  
          </nav>
          <div class='container'>
          
                      <router-outlet></router-outlet>
          
                  </div>
          </div>`,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private auth: AuthService){}
}
