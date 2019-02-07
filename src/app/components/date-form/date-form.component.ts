import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css']
})
export class DateFormComponent implements OnInit {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      date_from: new FormControl(),
      date_till: new FormControl(),
    });
  }

  submit() {
    console.log(this.myForm);
  }

  ngOnInit() {
  }

}
