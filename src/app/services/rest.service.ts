import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  /*
  * Gets all apartments from Webservice
  *
  * @return {observable}
  */
  getApartments() {
    let endpoint = "/apartments";
    return this.http.get<any[]>(environment.webServiceUrl + endpoint);
  }

  /*
  *  Adds apartment via Webservice
  *
  * @param {any} data
  *
  * @return {observable}
  */
  addApartment(data:any) {
    let endpoint = "/apartment" + this.buildParameters(data);
    return this.http.post(environment.webServiceUrl + endpoint, null, {observe: 'response'});
  }

  /*
  * Updates apartment with given id
  *
  * @param {number} id Id of the apartment which should be updated
  * @param {string} token Securitytoken which checks the authorization.
  * @param {any} data Dataobject for Update
  *
  * @return {observable}
  */
  updateApartment(id:number, token:string, data:any) {
    let endpoint = "/apartment/"+id+"/"+token + this.buildParameters(data);
    return this.http.put(environment.webServiceUrl + endpoint, null, {observe: 'response'});
  }


  /*
  * Deletes apartment with given id
  *
  * @param {number} id Id of the apartment which should be updated
  * @param {string} token Securitytoken which checks the authorization.
  *
  * @return {observable}
  */
  deleteApartment(id:number, token:string) {
    let endpoint = "/apartment/"+id+"/"+token;
    return this.http.delete(environment.webServiceUrl + endpoint, {observe: 'response'});
  }

  /*
  * Builds the Parameterurl. Example: ?var=Value&var2=Value2...
  *
  * @param {any} data Object for building the parameterstring
  *
  * @return {string} parameterString
  */
  buildParameters(data:any){
    let parameterString = "?"
    var keys = Object.keys(data);
    for(var i=0;i<keys.length;i++){
      parameterString = parameterString + keys[i] + "=" + data[keys[i]] + "&";
    }
    parameterString = parameterString.substr(0,parameterString.length - 1);
    return parameterString;
  }
}
