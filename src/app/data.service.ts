import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../config';

@Injectable({
  providedIn: 'root',
})
export default class DataService {
  constructor(private http:HttpClient) { }

  getCategory() {
    return this.http.get(`${config.baseUrl}/category/getCategory`);
  }
}
