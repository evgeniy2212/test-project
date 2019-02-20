import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTransferService {
  subject = new Subject<any>();

  fromDate(from: any) {
    this.subject.next({ date: from });
  }

  tillDate(to: number) {
    this.subject.next({ date: to });
  }

  getDate(): Observable<any> {
    return this.subject.asObservable();
  }
}
