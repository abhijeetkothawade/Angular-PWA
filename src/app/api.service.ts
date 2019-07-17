import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private httpClient : HttpClient) {  }

  getDetails() {
    return this.httpClient.get(this.apiUrl,{ observe: 'response' });
  }
}
