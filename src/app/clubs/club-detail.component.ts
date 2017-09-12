/*import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/

import { Component, OnInit } from '@angular/core'
import { ClubService } from '../services/club.service'
import { IClub } from "./club"
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  templateUrl: 'club-detail.component.html',
  //template: ` `,
  styles: [`
  .container { padding-left:20px; padding-right:20px; }
  .event-image { height: 100px; }
`]
  
})



export class ClubDetailComponent implements OnInit {
  pageTitle: string = 'Club detail';
  //getClubs: any;
  club: IClub;
  errorMessage: string;

  
  constructor(private _clubService:ClubService, private _route:ActivatedRoute, private _router: Router) {

  }
 ngOnInit() {
    //this.club = this.clubService.getClubs(+this.route.snapshot.params['id'])

   const id = +this._route.snapshot.params.get('id');
     this.IClub(id);
  }


  IClub(id: number) {
    
    
    
      }

 


}