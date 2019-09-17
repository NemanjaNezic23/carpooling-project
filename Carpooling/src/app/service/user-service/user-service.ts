import { User } from './../../model/user';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import UsersJson from '../../../assets/data/users.json';

@Injectable()
export class UserService {
  currentUser: User;

  private users: User[] = [];

  constructor(private router: Router) {
    this.generateUsers();
  }

  generateUsers() {
    let usersJson = UsersJson;
    for (let i = 0; i < usersJson.length; i++) {
      this.users.push(new User(usersJson[i]._id,
        usersJson[i].username ,
        usersJson[i].first_name,
         usersJson[i].last_name,
         usersJson[i].email,
          usersJson[i].phone));
    }

  }

  public getUsers() {
    return this.users;
  }

  public setCurrentUser(id) {
    this.currentUser = this.getUserProfile(id);
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public getUserProfile(id: String) {

    let us =  this.users.find(user => user._id === id);
      console.log("searched user =? " + us.first_name);
    return us;
  }


  public editUserProfile(newUserProfile: User) {

  }
}
