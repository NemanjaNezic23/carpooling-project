import { RideService } from './../service/ride-service/ride-service';
import { UserService } from './../service/user-service/user-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Ride } from '../model/ride';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrls: ['./rider-profile.component.css']
})
export class RiderProfileComponent implements OnInit {
  user:User;
  public completedRides: Ride[] = [];
  public requestedRides: Ride[] = [];
  constructor(private router:Router, private userService: UserService, private rideService: RideService) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
    this.completedRides = this.rideService.getCompletedRides(this.user._id);
  }


  edit() {
    this.router.navigate([this.router.url + '/edit']);

  }


  formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumberString;
  }


}
