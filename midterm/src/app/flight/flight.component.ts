import { Component, OnInit } from '@angular/core';
import { Flight } from './flight';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PageService } from '../service/page.service';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight: Flight[] = [];
  db: Date = new Date();
  flightform: FormGroup;
  countrydata!:any;

  constructor(private fb: FormBuilder, private p:PageService) {
    this.flightform = this.fb.group({
      fullName: ['',Validators.required],
      from: ['',Validators.required ],
      to: ['',Validators.required],
      type: ['',Validators.required],
      departure: ['',Validators.required ],
      arrival: ['',Validators.required],
      adults: [0,[Validators.required,Validators.max(10),Validators.pattern('[0-9]*$')]],
      children: [0,[Validators.required,Validators.max(10),Validators.pattern('[0-9]*$')]],
      infants: [0,[Validators.required,Validators.max(10),Validators.pattern('[0-9]*$')]],

  });
}

  ngOnInit(): void {
    console.log(this.db);
    
  }
  OnSubmit(value : any): void {
    console.log(value)
    this.flight.push(value)
    alert("You Submit.");
    this.flightform.reset({
      fullName: "",
      from: "",
      to: "",
      type: "",
      departure: "",
      arrival: "",
      adults:0,
      children: 0,
      infants: 0,

    })


  }

}
