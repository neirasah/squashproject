import { Component, OnInit } from '@angular/core'
import { ClubService } from './services/club.service'
import { ToastrService } from './services/toastr.service'

@Component({
  selector: 'clubs-list',
  template: `
  <div>
    <h1>List of squash clubs in Malmo</h1>
    <div class="row">
    <div *ngFor="let club of clubs" class="col-md-5">
      <club-thumbnail (click)="handleThumbnailClick(club.name)" [club]="club"></club-thumbnail>
    </div>
  </div>
  </div>
  `
})


export class ClubsListComponent implements OnInit {
    clubs:any[]
  
    constructor(private clubService: ClubService, private toastr: ToastrService) {
      
    }
  
    ngOnInit() {
      this.clubs = this.clubService.getClubs()
    }
  
    handleThumbnailClick(clubName) {
      this.toastr.success(clubName)
    }
  }