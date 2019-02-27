import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

import * as moment from 'moment';
import {DateTransferService} from '../../date-transfer.service';

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
    this.myForm.valueChanges
        .subscribe((data) => {
            this.dateService.setDay(Number(moment(data).format('DD')));
            console.log(data);
        });
  }
}
