export class User {
  _id: String;
  username: String;
  first_name: String;
  last_name: String;
  email: String;
  phone: String;

  constructor(id, username, firstName, lastName, email, phone) {
    this._id = id;
    this.username = username;
    this.first_name = firstName;
    this.last_name = lastName;
    this.email = email;
    this.phone = phone;
  }
}
