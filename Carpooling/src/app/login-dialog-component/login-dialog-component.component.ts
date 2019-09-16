import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-dialog-component',
  templateUrl: './login-dialog-component.component.html',
  styleUrls: ['./login-dialog-component.component.css']
})
export class LoginDialogComponentComponent implements OnInit {

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<LoginDialogComponentComponent>,
              private fb: FormBuilder) {

  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.fb.group({
      username: '',
      password: ''
    });
  }
  public onLogin(form) {

}
}
