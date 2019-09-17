import { RideService } from './../service/ride-service/ride-service';
import { Ride } from './../model/ride';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  public rides: Ride[];
  public today = new Date();

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rides = this.rideService.getRides();
  }


  sortByLaterDatesFirst() {
    this.rides.sort(function(a, b) {
      if (a.departingDatetime < b.departingDatetime) {
        return 1;
      }
      if (a.departingDatetime > b.departingDatetime) {
        return -1;
      }
      return 0;
    });
  }

  sortByEarliestDatesFirst() {
    this.rides.sort(function(a, b) {
      if (a.departingDatetime > b.departingDatetime) {
        return 1;
      }
      if (a.departingDatetime < b.departingDatetime) {
        return -1;
      }
      return 0;
    });
  }

  filterPastRides() {
    this.rides = this.rides.filter(ride => new Date(ride.departingDatetime) >= this.today);
  }

  onSearch ($event) {
    this.rides = $event;
    this.sortByEarliestDatesFirst();
    this.filterPastRides();
  }

}
