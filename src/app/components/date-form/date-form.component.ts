import { Component, OnInit, Input } from '@angular/core';
import { DateTransferService } from '../../date-transfer.service';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css']
})
export class DateFormComponent implements OnInit {
  @Input() DocNumber: number;

  constructor(private observ: DateTransferService) {

  }
  ngOnInit() {
      this.observ.subscribe(num => console.log('observer 1: ' + num));
  }
}
