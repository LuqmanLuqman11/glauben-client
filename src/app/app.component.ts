import { Component, OnInit } from '@angular/core';
import DataService from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent implements OnInit {
  title = 'angualr-eslint';

  constructor(private api:DataService) {}

  ngOnInit() {
    this.api.getCategory().subscribe((data:any) => {
      console.log('data:', data);
    });
  }
}
