import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(
    public name: string,
    public password: string) { }

}

var users = [
  new UserService('user1@gmail.com','123'),
  new UserService('user2@gmail.com','456')
];



