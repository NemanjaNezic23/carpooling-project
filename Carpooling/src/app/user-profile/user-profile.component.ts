import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride-service/ride-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user-service/user-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;

  public past_rides: Ride[] = [];
  public future_rides: Ride[];
  public money_saved = 0;

  public ride_costs = {'Rice' : {'IAH' : 40, 'Hobby' : 20, 'Rice' : 0}, 'IAH' : {'Rice' : 40}, 'Hobby' : {'Rice': 20}};


  constructor(private userService: UserService, private route: ActivatedRoute,
              private rideService: RideService, private fb: FormBuilder, private router: Router) {
                this.user = this.userService.getUserProfile('1');
              }

  ngOnInit() {

      // Get current user
      this.user =  this.userService.getCurrentUser();
      let userId = this.user._id;
      console.log('user id => ' + userId);
      this.past_rides = this.rideService.getPastRides(this.user._id);
      // this.past_rides = this.rideService.getPastRides(this.user._id);
  }

  /**
   * Take us to the edit page
   */
  edit() {
    this.router.navigate([this.router.url + '/edit']);
  }

  /**
   * Format a phone number string based on a universal format (xxx) xxx-xxxx
   * @param phoneNumberString the string to format
   */
  formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumberString;
  }

}
