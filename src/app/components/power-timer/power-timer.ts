import { Component, ViewChild, Input } from '@angular/core';

import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'power-timer',
  templateUrl: 'power-timer.html',
  styleUrls: ['./power-timer.scss']
})
export class PowerTimerComponent {

  @ViewChild(CountdownComponent)
  powerTimer: CountdownComponent;

  maxPower = 5;
  defaultTimeout = 10;

  @Input()
  power: number;
  @Input()
  time: number;

  constructor() {
      this.power = this.maxPower;
      this.time = this.defaultTimeout;
  }

  counter(i: number) {
    return new Array(i);
  }

  onTimerFinished() {
    if (this.power < this.maxPower) {
      this.power++;
      // hack to restart timer
      this.time = this.defaultTimeout + this.power * 0.001;
      this.powerTimer.restart();
    }
  }


}
