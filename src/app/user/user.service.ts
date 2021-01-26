import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./user";
import {HttpConfig} from "../http-config.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpConfig {

  getUsers(): Observable<User[]> {
    return this.http().get<User[]>(`${this.getBaseUrl() + "/users"}`);
  }

  getOneUser(userName: string): Observable<User> {
    return this.http().get<User>(`${this.getBaseUrl() + "/" + userName + "/getUser"}`);
  }
}
