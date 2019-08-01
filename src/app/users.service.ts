import {Injectable} from '@angular/core';
import {User} from "./models/user";

import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable()
export class UsersSevice{
    constructor(
        private http: HttpClient,
    ){}
    private usersUrl: string = "http://localhost:3000/users";
    getUsers() {
        return this.http.get<User[]>(this.usersUrl);
    }
}