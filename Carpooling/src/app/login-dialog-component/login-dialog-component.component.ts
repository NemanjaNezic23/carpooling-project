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
      email: new FormControl('', [Validators.email] ),
      registerUsername: new FormControl('', [Validators.required]),
      registerPassword: new FormControl('', [Validators.required]),
      registerEmail: new FormControl('', [Validators.required, Validators.email])
    });
  }
  public onLogin(form) {
    let uName = this.form.controls['username'].value;
    let uPass = this.form.controls['password'].value;

    if(uName == 'admin' && uPass == 'admin') {
         this.userService.setCurrentUser('1');
         this.userService.changeRole(1);
         this.userService.changeLoggedIn(true);
         this.dialogRef.close();
         this.router.navigate(['/driver']);
      } else if( uName === 'student' && uPass === 'student') {
        this.userService.setCurrentUser('2');
        this.userService.changeLoggedIn(true);
        this.userService.changeRole(2);
        this.dialogRef.close();
        this.router.navigate(['/profile']);
      }

}
}
