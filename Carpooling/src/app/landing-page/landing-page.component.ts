import { LoginDialogComponentComponent } from './../login-dialog-component/login-dialog-component.component';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) {
   }

  ngOnInit() {
  }

  public openLoginForm(): void {
     const dialogRef = new MatDialogConfig();

     dialogRef.disableClose = true;
     dialogRef.autoFocus = true;

     this.dialog.open(LoginDialogComponentComponent, dialogRef);
  }

  public closeDialog():void {

  }

}
