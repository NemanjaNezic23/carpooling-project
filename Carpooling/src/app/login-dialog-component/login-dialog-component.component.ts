import { UserService } from './../service/user-service/user-service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-login-dialog-component',
  templateUrl: './login-dialog-component.component.html',
  styleUrls: ['./login-dialog-component.component.css']
})
export class LoginDialogComponentComponent implements OnInit {

  form: FormGroup;
  user: User;

  isLoggedIn:boolean;

  constructor(private dialogRef: MatDialogRef<LoginDialogComponentComponent>,
              private router: Router, private userService: UserService) {

  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('example@email.com', [Validators.email] )
    });
  }
  public onLogin(form) {
    console.log("username + password is =>" + this.form.controls['username'].value + this.form.controls['password'].value);
    let uName = this.form.controls['username'].value;
    let uPass = this.form.controls['password'].value;

    if(uName == 'admin' && uPass == 'admin') {
         this.userService.setCurrentUser('1');
        this.router.navigate(['/profile']);
        this.isLoggedIn = true;
        this.dialogRef.close();
      }

}
}
