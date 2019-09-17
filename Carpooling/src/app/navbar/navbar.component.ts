import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private loggedIn: '';

  private _id = '';

  constructor(private router: Router) {
  }

  ngOnInit() {


  }

  profile() {
    this.router.navigate(['/profile/' + this._id]);
  }

  logout() {

  }

  // this routes page to /rides/new
  newRideForm() {
    this.router.navigate(['/rides/new']);
  }

  // this routes page to /rides
  navigateToRides() {
    this.router.navigate(['/rides'])
      .then((success) => console.log(success));
  }
}
