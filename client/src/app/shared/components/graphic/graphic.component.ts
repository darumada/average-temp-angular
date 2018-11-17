import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { WebworkerService } from '../../services/webworker.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements AfterViewInit {
  chart: Chart = {};

  constructor(private worker: WebworkerService) {}

  ngAfterViewInit() {
    this.worker.resultEvent.subscribe(e => {
      if (this.chart.destroy) {
        this.chart.destroy();
      }
      this.createGraph(e.data);
    });
  }
  createGraph(data: number[]) {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь'
        ],
        datasets: [
          {
            data: data,
            borderColor: '#3cba9f',
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
