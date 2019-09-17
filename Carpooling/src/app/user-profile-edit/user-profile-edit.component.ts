import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user-service/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {
  public fullyLoaded: Promise<boolean>;
  public userForm: FormGroup;
  public user: User;

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: [''],
    });

    this.route.params.subscribe(async params => {

      this.user = this.userService.getUserProfile(params['_id']);

    });
  }

  /**
   * Submit to edit profile endoint
   */
  submit() {
    this.user.first_name = this.userForm.value['first_name'] || this.user.first_name;
    this.user.last_name = this.userForm.value['last_name'] || this.user.last_name;
    this.user.phone = this.userForm.value['phone_number'] || this.user.phone;

        this.router.navigate([`/profile/${this.user._id}`]);
      }


}
