import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-datepicker2',
  templateUrl: './datepicker2.component.html',
  styleUrls: ['./datepicker2.component.css']
})
export class Datepicker2Component implements OnInit {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      date_till: new FormControl(moment()),
    });
  }

  change(dataEvent) {
    console.log(dataEvent.value);
  }

  ngOnInit() {
  }

}
