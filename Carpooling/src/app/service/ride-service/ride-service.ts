import { Ride } from './../../model/ride';
import { Injectable } from '@angular/core';
import RidesJson from '../../../assets/data/rides.json';

@Injectable()
export class RideService {
private rides: Ride[] = [];

  constructor() {
      this.generateRides()
      console.log(this.rides[0]);
   }


   generateRides() {
     let listOfRides = RidesJson;
     for( let i=0; i< listOfRides.length; i++) {
       this.rides.push(new Ride(listOfRides[i]._id, listOfRides[i].departingFrom, listOfRides[i].departingDatetime,
        listOfRides[i].arrivingAt, listOfRides[i].meetingLocation, listOfRides[i].numberRiders, listOfRides[i].commentsInput,
        listOfRides[i].cost,
        listOfRides[i].spots, listOfRides[i].vehiclyeType, listOfRides[i].departureTime, listOfRides[i].arrivalTime,
        listOfRides[i].departureAddress, listOfRides[i].arrivalAddress, listOfRides[i].departureLocation, listOfRides[i].arrivalLocation,
        listOfRides[i].owner, listOfRides[i].title, listOfRides[i].description,
        listOfRides[i].riders));
     }
   }

  public getRides() {
    return this.rides;
  }

  public getPastRides(userId) {
    let pastRides:Ride[] = [];
    for(let i=0;i<this.rides.length; i++ ){
     let riders = this.rides[i].riders;
     console.log(riders);
     for(let j=0;j<riders.length; j++) {
       if(riders[j]._id == userId)
       pastRides.push(this.rides[i]);
     }
    }
    console.log(pastRides);
    return pastRides;
  }

  // searchRides(departing_from = '', arriving_at = '', departure_date = ''): Promise<any> {
  //   return this.http.get(
  //     `${this.apiUrl}/search?departing_from=${departing_from}&arriving_at=${arriving_at}&departure_date=${departure_date}`,
  //     this.jwt())
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(err => console.log(err));
  // }

  // addRide(ride: Ride, user_id: string): Promise<any> {
  //   return this.http.post(`${this.apiUrl}/rides`, {ride: ride, user_id: user_id}, this.jwt())
  //     .toPromise()
  //     .then(res => res.json() as Ride)
  //     .catch(err => console.log(err));
  // }

  getRide(ride_id: String) {
   return this.rides.find(ride => ride._id === ride_id);
  }

  // postUserToRide(ride_id: string, user_id: string): Promise<any> {
  //   return this.http.post(`${this.apiUrl}/rides/${ride_id}/book`, {user_id: user_id}, this.jwt())
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(err => console.log(err));
  // }


  // getPastRidesByUser(user_id: string): Promise<any> {
  //   return this.http.get(`${this.apiUrl}/rides/past/user/${user_id}`, this.jwt())
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(err => console.log(err));
  // }

  // getFutureRidesByUser(user_id: string): Promise<any> {
  //   return this.http.get(`${this.apiUrl}/rides/future/user/${user_id}`, this.jwt())
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(err => console.log(err));
  // }
}
