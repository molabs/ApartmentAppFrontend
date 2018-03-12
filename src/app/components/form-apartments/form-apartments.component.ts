import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { RestService  } from '../../services/rest.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-apartments',
  templateUrl: './form-apartments.component.html',
  styleUrls: ['./form-apartments.component.css']
})
export class FormApartmentsComponent implements OnInit {
  @Input() apartmentData:any;
  @Output() messageEvent = new EventEmitter<boolean>();
  postcode:string = "";
  errorMessage:string = "";
  disabled:boolean = true;

  constructor(private restService:RestService,
              private router: Router) {}

  /*
  * Changefunction to detect multiple loadings of component
  */
  ngOnChanges(){
    if(this.apartmentData.token != undefined || this.apartmentData.new == true){
      this.disabled = false;
    }else{
      this.disabled = true;
    }
  }

  ngOnInit() {}

  /*
  * Function to submit the form
  */
  submitForm(){
    if(this.apartmentData.id === undefined){
      // Add New
      this.restService.addApartment(this.apartmentData).subscribe(
        (apartmentAdded) => {
          if(apartmentAdded.status == 200){
            this.messageEvent.emit(false);
            this.router.navigate(['']);
          }
        },
        error => {
          this.errorMessage = error.status+": "+JSON.stringify(error.error);
        });
    }else{
      // Update
      var id = this.apartmentData.id;
      delete this.apartmentData.id;
      var token = this.apartmentData.token;
      delete this.apartmentData.token;
      // Rest updatecall
      this.restService.updateApartment(id, token, this.apartmentData).subscribe(
        (apartmentUpdated) => {
          if(apartmentUpdated.status == 200){
            this.messageEvent.emit(false);
            this.router.navigate(['']);
          }
        },
        error => {
          this.apartmentData.token = token;
          this.apartmentData.id = id
          this.errorMessage = error.status+": "+JSON.stringify(error.error);
        })
    }
  }

  /*
  * Delete apartment function
  */
  deleteApartment(){
    this.restService.deleteApartment(this.apartmentData.id, this.apartmentData.token).subscribe(
      (apartmentDeleted) => {
        if (apartmentDeleted.status == 200) {
          this.messageEvent.emit(false);
          this.router.navigate(['']);
        }
      },
      error => {
        this.errorMessage = error.status+": "+error.error;
      })
  }

  /*
  * Cancel submitform
  */
  cancel(){
    this.router.navigate(['']);
    this.messageEvent.emit(false);
  }
}
