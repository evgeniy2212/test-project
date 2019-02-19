import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DateFormComponent } from './components/date-form/date-form.component';
import { Datepicker1Component } from './components/datepicker1/datepicker1.component';
import { Datepicker2Component } from './components/datepicker2/datepicker2.component';
import { Datepicker3Component } from './components/datepicker3/datepicker3.component';

import { DateTransferService } from './date-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    DateFormComponent,
    Datepicker1Component,
    Datepicker2Component,
    Datepicker3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    DateTransferService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
