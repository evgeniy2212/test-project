import { Component, OnInit } from '@angular/core';
import { DateTransferService } from '../../date-transfer.service';
import { Subscription } from 'rxjs';

import * as moment from 'moment';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css']
})
export class DateFormComponent implements OnInit {
    docNumber: any;
    subscription: Subscription;
  constructor(private dateService: DateTransferService) {
      this.subscription = this.dateService.getDate().subscribe((from) => {
          this.docNumber = from.join('') + moment().format('YYYY');
      });
      dateService.days.next(moment().format('DD'));
      dateService.months.next(moment().format('MM'));
  }
  ngOnInit() {
  }
}
