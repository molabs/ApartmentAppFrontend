import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-apartments',
  templateUrl: './list-apartments.component.html',
  styleUrls: ['./list-apartments.component.css']
})
export class ListApartmentsComponent implements OnInit {

  apartments = [];
  showInput:boolean = false;
  selectedApartment:any = {};
  id:number;
  token:string = "";

  constructor(private restService:RestService,
  private route: ActivatedRoute){ }

  /*
  * Default ngOnInit function, receives the parameters of the url
  */
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id'];
       this.token = params['token'];
    });
    this.buildApartmentList();
  }

  /*
  * Function for receiving message from childcomponent
  *
  * @param {object} $event Apartmentobject
  *
  */
  receiveMessage($event){
    this.showInput = $event;
    this.buildApartmentList();
  }


  /*
  * Display the inputform with existing data
  *
  * @param {object} apartmentObject
  */
  showInputForm(apartmentObject){
    this.showInput = true;
    this.selectedApartment = apartmentObject;
  }

  /*
  * Display the inputform for new apartment
  */
  addNew(){
    this.showInput = true;
    this.selectedApartment = { "new":true};
  }

  /*
  * Builds the list of apartments
  */
  buildApartmentList(){
    this.restService.getApartments().subscribe((apartmentsResult) => {

      apartmentsResult.forEach((item, index) => {
        apartmentsResult[index].enterdate = new Date(Date.parse(apartmentsResult[index].enterdate)).toLocaleDateString();
        if(this.id != undefined && apartmentsResult[index].id == this.id){
          this.selectedApartment = JSON.parse(JSON.stringify(apartmentsResult[index]));
          this.showInput = true;
        }
        delete apartmentsResult[index].token;

      });

      this.apartments = apartmentsResult;
    });
  }

}
