import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-datepicker3',
  templateUrl: './datepicker3.component.html',
  styleUrls: ['./datepicker3.component.css']
})
export class Datepicker3Component implements OnInit {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      date_start: new FormControl(moment().format('l')),
    });
  }

  ngOnInit() {
  }

  change(dataEvent) {
    console.log(this.myForm.value);
  }

}
