import { User } from './../../model/user';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import UsersJson from '../../../assets/data/users.json';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  currentUser: User;

  private loggedSource = new BehaviorSubject<boolean>(false);
  private roleSource = new BehaviorSubject<Number>(0);
  role = this.roleSource.asObservable();
  loggedIn = this.loggedSource.asObservable();
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

  public changeRole(value:Number) {
   this.roleSource.next(value);
  }


  public getUsers() {
    return this.users;
  }

  public setCurrentUser(id) {
    this.currentUser = this.getUserProfile(id);
  }

  public getIsLoggedIn() {
    return this.loggedIn;
  }

  public getCurrentUser() {
    return this.currentUser;
  }


  public changeLoggedIn(value: boolean) {
    this.loggedSource.next(value);
  }


  public getUserProfile(id: String) {

    let us =  this.users.find(user => user._id === id);
    return us;
  }


  public editUserProfile(newUserProfile: User) {

  }
}
