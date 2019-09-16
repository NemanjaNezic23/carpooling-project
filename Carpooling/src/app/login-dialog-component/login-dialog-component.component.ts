import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog-component',
  templateUrl: './login-dialog-component.component.html',
  styleUrls: ['./login-dialog-component.component.css']
})
export class LoginDialogComponentComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<LoginDialogComponentComponent>,
              private router: Router) {

  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  public onLogin(form) {
    console.log("calling login!");
    this.router.navigate(['/rides']);
}
}
