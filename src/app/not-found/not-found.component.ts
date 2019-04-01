import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private ProfilesService:  ProfilesService) {
    this.ProfilesService.getProfileInfo().subscribe(profile => {
      console.log(profile);
    })
   }

  ngOnInit() {
  }

}
