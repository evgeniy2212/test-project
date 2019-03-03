import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import * as moment from 'moment';

export const MY_FORMATS = {
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
  selector: 'app-datepicker2',
  templateUrl: './datepicker2.component.html',
  styleUrls: ['./datepicker2.component.css'],
    providers: [

        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
})
export class Datepicker2Component implements OnInit {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      date_start: new FormControl(moment()),
    });
  }

  change(dataEvent) {
    console.log(dataEvent.value);
  }

  ngOnInit() {
  }

}
