import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api_url = environment.api_url;
  constructor(private http: HttpClient) {}
  getTemp() {
    return this.http.get(`${this.api_url}/temperature`);
  }

  getPreciptation() {
    return this.http.get(`${this.api_url}/precipitation`);
  }
}
