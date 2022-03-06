import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageService } from './service/page.service';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatNativeDateModule, BrowserAnimationsModule

  ],
  providers: [PageService,{provide: MAT_DATE_LOCALE, useValue: 'th-TH'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
