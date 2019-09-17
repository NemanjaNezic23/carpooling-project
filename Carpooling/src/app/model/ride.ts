import {User} from './user';

export class Ride {
  _id: string;
  departingFrom: String;
  departingDatetime: Date;
  arrivingAt: String;
  meetingLocation: String;
  numberRiders: String;
  commentsInput: String;

  // number_of_riders: Number;

  cost: Number;
  spots: Number;
  vehicleType: String;
  departureTime: Date;
  arrivalTime: Date;
  departureAddress: String;
  arrivalAddress: String;
  departureLocation: Number[];
  arrivalLocation: Number[];
  owner: User[];
  title: String;
  description: String;
  riders: User[];

  constructor(id, departingFrom, departingDateTime, arrivingAt, meetingLocation, numberRiders,
              commentsInput, cost, spots, vehicleType, departureTime, arrivalTime, departureAddress,
              arrivalAddress, departureLocation, arrivalLocation, owner, title,
              description,  riders) {
                      this._id = id;
                      this.departingFrom = departingFrom;
                      this.departingDatetime = departingDateTime;
                      this.arrivingAt = arrivingAt;
                      this.meetingLocation = meetingLocation;
                      this.numberRiders = numberRiders;
                      this.commentsInput = commentsInput;
                      this.cost = cost;
                      this.spots = spots;
                      this.vehicleType = vehicleType;
                      this.departureTime = departureTime;
                      this.arrivalTime = arrivalTime;
                      this.departureAddress = departureAddress;
                      this.arrivalAddress = arrivalAddress;
                      this.departureLocation = departureLocation;
                      this.arrivalLocation = arrivalLocation;
                      this.owner = owner;
                      this.title = title;
                      this.description = description;
                      this.riders = riders;
                    }


}
