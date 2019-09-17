import { Component, OnInit } from '@angular/core';
import { RideService } from '../service/ride-service/ride-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Ride } from '../model/ride';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {
  ride: Ride;

  constructor(private rideService: RideService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router)  { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.ride =  this.rideService.getRide(params['_id']);
      if (!this.ride) {
        console.log(`ride ${params['_id']} could not be found`);
        return;
      }

    });
  }

  /**
   * Allow the current user to join this ride
   */
  postUserToRide() {
    if ( new Date(this.ride.departingDatetime) <= new Date()) {
      alert('You cannot join a past ride.');
    } else {
       console.log('User is joining this ride');
      }
    }


  /**
   * Remove the current user from this ride
   */
removeUserToRide() {

  }

departParseDay(rideTime: String) {
    if (rideTime) {
      return rideTime.split(' ')[1].slice(0, -1);
    }
  }

checkUser() {

    return true;
  }

rideFull() {
    return this.ride.riders.length >= parseInt(this.ride.numberRiders.toString(), 10);
  }

// displays month in its shortened version
departParseMonth(rideTime: String) {
    if (rideTime) {
      const temp =  rideTime.split(' ')[0];
      if (temp.toLowerCase() === 'january') {
        return 'Jan.';
      } else if (temp.toLowerCase() === 'february') {
        return 'Feb.';
      } else if (temp.toLowerCase() === 'march') {
        return 'Mar.';
      } else if (temp.toLowerCase() === 'april') {
        return 'Apr.';
      } else if (temp.toLowerCase() === 'may') {
        return 'May';
      } else if (temp.toLowerCase() === 'june') {
        return 'June';
      } else if (temp.toLowerCase() === 'july') {
        return 'July';
      }  else if (temp.toLowerCase() === 'august') {
        return 'Aug';
      } else if (temp.toLowerCase() === 'september') {
        return 'Sept.';
      } else if (temp.toLowerCase() === 'october') {
        return 'Oct.';
      } else if (temp.toLowerCase() === 'november') {
        return 'Nov.';
      } else if (temp.toLowerCase() === 'december') {
        return 'Dec.';
      }
    }
  }



}
