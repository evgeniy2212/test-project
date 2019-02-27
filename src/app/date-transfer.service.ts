import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTransferService {
  subject = new Subject();
  date = new Date().getDate();
  day: BehaviorSubject<number> = new BehaviorSubject(this.date);
  month: BehaviorSubject<number> = new BehaviorSubject(this.date);
  setDay(day: number) {
    this.subject.next(day);
  }
  getDay(): number {
    return this.day.getValue();
  }
  fromDate(from: any) {
    this.subject.next({ date: from });
  }

  tillDate(to: any) {
    this.subject.next({ date: to });
  }

  getDate(): Observable<any> {
    return this.subject.asObservable();
  }
}
