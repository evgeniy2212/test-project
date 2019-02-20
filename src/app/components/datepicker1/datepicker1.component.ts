import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DateTransferService } from '../../date-transfer.service';

import * as moment from 'moment';

@Component({
  selector: 'app-datepicker1',
  templateUrl: './datepicker1.component.html',
  styleUrls: ['./datepicker1.component.css']
})
export class Datepicker1Component implements OnInit {
  myForm: FormGroup;
  date = new Date();
  constructor(private dateService: DateTransferService) {
    this.myForm = new FormGroup({
      date_from: new FormControl(),
    });
  }

  ngOnInit() {
      this.dateService.fromDate(moment(this.date).format('DD-MM-YYYY'));
  }

  fromDate(date) {
    this.dateService.fromDate(moment(date.value).format('DD-MM-YYYY'));
    // console.log('day' + moment(date.value).format('DD'));
    // console.log('month' + moment(date.value).format('MM'));
    // console.log(this.date.getFullYear());
  }

}
