import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Ride } from '../model/ride';
import { RideService } from '../service/ride-service/ride-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {
  @ViewChild('timeInput', {static: false}) dateTimeInput: ElementRef;

  newRideForm: FormGroup;
  startAt: Date = new Date();
  public todayDate: any = new Date();

  constructor(private fb: FormBuilder,
              private rideService: RideService,
              private router: Router)
               {
    this.startAt.setHours(0, 0, 0, 0);
  }

  ngOnInit() {
    this.newRideForm = this.fb.group({
      departing_from: ['', Validators.required],
      date_time: ['', Validators.required],
      arriving_at: ['', Validators.required],
      number_riders: ['', Validators.required],
      comments_input: ['']
    });
  }
  // when submit is pressed, the user information is updated and a new ride is created

  submit() {

  }


}
