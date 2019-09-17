import { UserService } from './../service/user-service/user-service';
import { RideService } from './../service/ride-service/ride-service';
import { LoginDialogComponentComponent } from './../login-dialog-component/login-dialog-component.component';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  dialogRef: MatDialogRef<LoginDialogComponentComponent>;

  constructor(private router: Router, public dialog: MatDialog,
    private rideService: RideService,
    private userService: UserService) {

   }

  ngOnInit() {
  }

  public openLoginForm(): void {

    const dialogRef = new MatDialogConfig();
    dialogRef.disableClose = true;
    dialogRef.autoFocus = true;
    dialogRef.panelClass = 'ui-panel-overlay';

    this.dialog.open(LoginDialogComponentComponent, dialogRef);
  }

  public closeDialog():void {
    this.dialogRef.close();
  }

}
