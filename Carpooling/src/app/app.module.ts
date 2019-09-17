import { UserService } from './service/user-service/user-service';
import { RideService } from './service/ride-service/ride-service';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppComponent } from './app-component/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginDialogComponentComponent } from './login-dialog-component/login-dialog-component.component';
import { RideListComponent } from './ride-list/ride-list.component';
import { RideCardComponent } from './ride-card/ride-card.component';
import { SearchCardComponent } from './search-card/search-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { NewRideComponent } from './new-ride/new-ride.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { RiderEditProfileComponent } from './rider-edit-profile/rider-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    LoginDialogComponentComponent,
    RideListComponent,
    RideCardComponent,
    SearchCardComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    NewRideComponent,
    RideDetailComponent,
    RegisterFormComponent,
    RiderProfileComponent,
    RiderEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    RideService,
    UserService,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponentComponent]
})
export class AppModule { }
