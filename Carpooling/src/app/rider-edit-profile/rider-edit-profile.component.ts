import { Router } from '@angular/router';
import { UserService } from './../service/user-service/user-service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-rider-edit-profile',
  templateUrl: './rider-edit-profile.component.html',
  styleUrls: ['./rider-edit-profile.component.css']
})
export class RiderEditProfileComponent implements OnInit {
  public userForm: FormGroup;
  public user: User;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit()  {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: [''],
      fare: [Validators.required]
    });

    this.user = this.userService.getCurrentUser();
  }


  submit() {
    this.user.first_name = this.userForm.value.first_name || this.user.first_name;
    this.user.last_name = this.userForm.value.last_name || this.user.last_name;
    this.user.phone = this.userForm.value.phone_number || this.user.phone;
    const fare = this.userForm.value.fare || '';

    this.router.navigate([`/rider/${this.user._id}`]);
      }

}
