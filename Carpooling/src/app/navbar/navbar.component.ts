import { UserService } from './../service/user-service/user-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;

  private _id:String = '';

  constructor(private router: Router, private userService: UserService) {


  }

  ngOnInit() {
    this.userService.loggedIn.subscribe(value => this.loggedIn = value);
  }

  profile() {
    this._id = this.userService.getCurrentUser()._id;
    this.router.navigate(['/profile/' + this._id]);
  }

  logout() {
    this._id = '';
    this.userService.changeLoggedIn(false);
    this.router.navigate(['']);
  }

  // this routes page to /rides/new
  newRideForm() {
    this.router.navigate(['/rides/new']);
  }

  // this routes page to /rides
  navigateToRides() {
    this.router.navigate(['/rides'])
  }
}
