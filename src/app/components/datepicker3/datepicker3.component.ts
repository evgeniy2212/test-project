import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import * as moment from 'moment';
import {DateTransferService} from '../../date-transfer.service';

@Component({
  selector: 'app-datepicker3',
  templateUrl: './datepicker3.component.html',
  styleUrls: ['./datepicker3.component.css']
})
export class Datepicker3Component implements OnInit {
  myForm: FormGroup;
  date = new Date();
  constructor(private dateService: DateTransferService) {
    this.myForm = new FormGroup({
      date_start: new FormControl(),
    });
  }

  ngOnInit() {
    this.dateService.tillDate(moment(this.date).format('DD-MM-YYYY'));
  }

  tillDate(date) {
    this.dateService.tillDate(moment(date.value).format('DD-MM-YYYY'));
  }

}
