import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import * as moment from 'moment';
import {DateTransferService} from '../../date-transfer.service';

export const MY_FORMATS = {
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
  selector: 'app-datepicker1',
  templateUrl: './datepicker1.component.html',
  styleUrls: ['./datepicker1.component.css'],
  providers: [

      { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

      { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Datepicker1Component implements OnInit {
  myForm: FormGroup;
  date = new Date();
  constructor(private dateService: DateTransferService) {
    this.myForm = new FormGroup({
      date_from: new FormControl(moment()),
    });
  }

  ngOnInit() {
    this.myForm.valueChanges
        .subscribe((data) => {
            this.dateService.setDay(data.date_from);
            // moment(data.date_from).format('DD-MM-YYYY')
            // console.log(data.date_from);
        });
  }
}
