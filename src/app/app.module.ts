import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { ClubsListComponent } from './clubs-list.component';
import { ClubThumbnailComponent } from './club-thumbnail.component';
import { ToastrService } from './services/toastr.service';
import { ClubService } from './services/club.service';

@NgModule({
  declarations: [
    AppComponent,
    ClubsListComponent,
    ClubThumbnailComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService,ClubService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
