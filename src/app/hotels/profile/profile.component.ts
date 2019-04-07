import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/app/intesfaces/IHotel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input()
  public profile: IProfile;

  constructor() { }

  ngOnInit() {
  }
}
