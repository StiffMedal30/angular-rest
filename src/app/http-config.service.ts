import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpConfig {

  private baseUrl = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  getBaseUrl(){
    return this.baseUrl;
  }

  http(){
    return this.httpClient;
  }
}
