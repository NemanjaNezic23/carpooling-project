import { RiderEditProfileComponent } from './rider-edit-profile/rider-edit-profile.component';
import { RiderProfileComponent } from './rider-profile/rider-profile.component';
import { UserProfileEditComponent } from './user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { NewRideComponent } from './new-ride/new-ride.component';
import { RideListComponent } from './ride-list/ride-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },

  {
    path: 'rides',
    children: [
      {
      path: '',
      component: RideListComponent
      },
      {
        path: 'new',
        component: NewRideComponent
      },
      {
        path: ':_id',
        component: RideDetailComponent
      }
    ]
  },
  {
    path: 'profile',
    children: [
      {
      path: '',
      component: UserProfileComponent,
      pathMatch: 'full'
      },
      {
        path: 'edit',
        component: UserProfileEditComponent
      },
      {
        path: ':_id',
        component: UserProfileComponent
      }
    ]
  },
  {

      path: 'driver',
      children: [
      {
      path:'',
      component: RiderProfileComponent,
      pathMatch: 'full'
      },
      {
        path: 'edit',
        component: RiderEditProfileComponent
      },
      {
        path: ':_id',
        component: RiderProfileComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
