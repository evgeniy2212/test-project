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
    input: any;
    today = new Date();
    subscription: Subscription;
  constructor(private dateService: DateTransferService) {
      this.subscription = this.dateService.getDate().subscribe((from) => {
        this.input = from;
        this.docNumber = moment(this.input).format('DD') + moment(this.input).format('MM') + this.today.getFullYear();
          console.log('day' + moment(this.input).format('DD'));
          console.log('month' + moment(this.input).format('MM'));
          console.log(this.today.getFullYear());
      });
  }
  ngOnInit() {
      console.log('day' + moment(this.input).format('DD'));
      console.log('month' + moment(this.input).format('MM'));
      console.log(this.today.getFullYear());
  }
}
