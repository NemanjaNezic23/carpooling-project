import { RideService } from './../service/ride-service/ride-service';
import { Ride } from './../model/ride';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})

export class SearchCardComponent implements OnInit {
  @Output() ridesSearch = new EventEmitter<Ride[]>();
  private rides: Ride[];
  newSearchForm: FormGroup;
  startAt: Date = new Date();
  public todayDate: any = new Date();

  constructor(private rideService: RideService, private fb: FormBuilder, private router: Router) {}


  ngOnInit() {
    this.newSearchForm = this.fb.group({
      departing_from: [''],
      arriving_at: [''],
      search_depart_date: ['']
    });
  }
}
