import { Component, OnInit } from '@angular/core';
import { ApiService, WebworkerService, Res } from './shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  startDate: number;
  endDate: number;
  data: Res[];
  years: number[] = [];
  constructor(private api: ApiService, private worker: WebworkerService) {}

  ngOnInit() {
    this.getTemp();
  }
  generateRes() {
    this.worker.postMessage(this.data, this.startDate, this.endDate);
  }
  getTemp() {
    this.api.getTemp().subscribe((data: Res[]) => {
      this.data = data;
      this.setYears(data);
      this.generateRes();
    });
  }
  getPrecipitation() {
    this.api.getPreciptation().subscribe((data: Res[]) => {
      this.data = data;
      this.setYears(data);
      this.generateRes();
    });
  }
  setYears(data) {
    this.startDate = +data[0].t.split('-')[0];
    this.endDate = +data[data.length - 1].t.split('-')[0];
    this.years = [];
    for (let i = this.startDate; i <= this.endDate; i++) {
      this.years.push(i);
    }
  }
  onChange() {
    this.generateRes();
  }
}
