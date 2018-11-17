import { Injectable, EventEmitter } from '@angular/core';
import { Res } from '..';

@Injectable({
  providedIn: 'root'
})
export class WebworkerService {
  worker: any;

  resultEvent: EventEmitter<any>;

  result: any;

  constructor() {
    this.init();
    this.onMessage();
    this.resultEvent = new EventEmitter();
  }
  init() {
    this.worker = new Worker('/assets/scripts/worker.js');
  }
  onMessage() {
    this.worker.onmessage = e => {
      this.resultEvent.emit(e);
    };
  }
  postMessage(data: Res[], startDate: number, endDate: number) {
    this.worker.postMessage({ data, startDate, endDate });
  }
}
