import { Component } from '@angular/core';
import {interval, map, Observable, shareReplay} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  constructor() {
    this.timeLeft$ = interval(0).pipe(
      map(x => this.calcDateDiff()),
      shareReplay(1)
    );
  }

  public timeLeft$: Observable<any>;
  public timeDifference = 0;

  public calcDateDiff() {
    const value = 1718226000000;
    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    this.timeDifference = value - Date.now();

    const daysToDday = Math.floor(
      this.timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    const hoursToDday = Math.floor(
      (this.timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    );

    const minutesToDday = Math.floor(
      (this.timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    );

    const secondsToDday =
      Math.floor(this.timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }

}
