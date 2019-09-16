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
  arrivaAddress: String;
  departureLocation: Number[];
  arrivalLocation: Number[];
  owner: User;
  title: String;
  description: String;
  riders: User[];
}
