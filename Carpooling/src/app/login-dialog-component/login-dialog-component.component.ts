import {MatDialog, MatDialogConfig } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dialog-component',
  templateUrl: './login-dialog-component.component.html',
  styleUrls: ['./login-dialog-component.component.css']
})
export class LoginDialogComponentComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }


  ngOnInit() {
  }

}
