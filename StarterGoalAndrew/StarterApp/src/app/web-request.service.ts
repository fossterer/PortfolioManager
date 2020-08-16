import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://127.0.0.1:5000';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  async postPromise(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload).toPromise();
  }
}
