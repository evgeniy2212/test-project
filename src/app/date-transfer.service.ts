import { Injectable } from '@angular/core';
import { combineLatest, Observable, Subject} from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateTransferService {
  days = new Subject();
  months = new Subject();
  beforeDay: Date = new Date();
  beforeMonth: Date = new Date();
  day: string;
  month: string;

  setDay(day: Date) {
    console.log(moment(this.beforeDay).format('DD-MM-YYYY'));
    if (moment(day).isBefore(this.beforeMonth)) {
      this.beforeDay = day;
      this.day = moment(day).format('DD')
      this.days.next(this.day);
    }
  }

  setMonth(month: Date) {
    console.log(moment(this.beforeMonth).format('DD-MM-YYYY'));
    if (moment(month).isAfter(this.beforeDay)) {
      this.beforeMonth = month;
      this.month = moment(month).format('MM')
      this.months.next(this.month);
    }
  }

  getDate(): Observable<any> {
    return combineLatest(this.days, this.months);
  }
}
