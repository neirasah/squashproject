import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { ClubsListComponent } from './clubs-list.component';
import { ClubService } from './services/club.service';
import { ClubDetailComponent } from './clubs/club-detail.component';
import {RouterModule} from '@angular/router';
import { ProfileComponent } from "./user/profile.component";
import {AuthService} from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    ClubsListComponent,
    ClubDetailComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'clubs/:id', component:ClubDetailComponent},
      { path: 'welcome', component: ClubsListComponent},
      { path: '',  redirectTo: 'welcome' , pathMatch: 'full'},
      //{ path: '**', redirectTo: 'welcome' , pathMatch: 'full'},
      { path: 'profile', component: ProfileComponent},
      { path: 'user', loadChildren: 'app/user/user.module#UserModule'}

    ])
  ],
  providers: [
    UserService,
    ClubService, 
    AuthService,
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
