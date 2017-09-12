import { Component, OnInit } from '@angular/core'
import { ClubService } from './services/club.service'
import { ActivatedRoute } from '@angular/router'
//import { ToastrService } from './services/toastr.service'

@Component({
  selector: 'clubs-list',
  template: `
  <div>
    <h1>List of squash clubs in Malmo</h1>
    <h2>Here you can check some of the Malmo's best squash clubs and book a session in any of them</h2>
    <div class="row">
    <div *ngFor="let club of clubs" class="col-md-5">
    <!--The link to the club-details route, passing the ID of the club-->
    <a [routerLink]="['/clubs', club.id]">
    <div class="well hoverwell thumbnail" >
    <h2>{{club?.name | uppercase}}</h2>
    <div><img src="{{club?.imageUrl}}" alt="{{club?.name}}" /></div>
    <div>Address: {{club?.address}}</div>
    <div>Courts#: {{club?.courtsNo}}</div>
    <div>Open: {{club?.open}}</div>
    </div>
    </a>
  </div>
  </div>
  `
})


export class ClubsListComponent implements OnInit {
     clubs:any[]
  
    constructor(private clubService: ClubService) {
      
    }
  
    ngOnInit() {
      this.clubs = this.clubService.getClubs()
    }
  

  }