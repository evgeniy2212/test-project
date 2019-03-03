import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {DateTransferService} from '../../date-transfer.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';


export const MY_FORMATS = {
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-datepicker3',
  templateUrl: './datepicker3.component.html',
  styleUrls: ['./datepicker3.component.css'],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Datepicker3Component implements OnInit {
  myForm: FormGroup;
  constructor(private dateService: DateTransferService) {
    this.myForm = new FormGroup({
      date_till: new FormControl(moment()),
    });
  }

  ngOnInit() {
    this.myForm.valueChanges
        .subscribe((data) => {
          this.dateService.setMonth(data.date_till);
          // console.log(moment(data.date_till));
        });
  }
}
