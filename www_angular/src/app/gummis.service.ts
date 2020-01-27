import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GummisService {

  uri = 'http://'+window.location.hostname+'/gummis';

  auth2 = null;

  constructor(private http: HttpClient) { }

  addGummi(GummiName, GummiMakeAWish, GummiOwner) {
    const obj = {
      GummiName,
      GummiMakeAWish,
      GummiOwner
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getGummis() {
    return this
           .http
           .get(`${this.uri}`);
  }

  getMyGummis(owner) {
  	var convertedOwner = window.btoa(owner);
    return this
           .http
           .get(`${this.uri}/${convertedOwner}`);
  }

  // editGummi(id) {
  //   return this
  //           .http
  //           .get(`${this.uri}/edit/${id}`);
  // }

  detailGummi(id) {
    return this
            .http
            .get(`${this.uri}/detail/${id}`); 
  }
  myDetailGummi(owner) {
    return this
            .http
            .get(`${this.uri}/mydetail/${owner}`); 
  }

  updateGummi(GummiName, id) {
    const obj = {
      GummiName
    };
    console.log("update", GummiName, obj, id);
    this.http.post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteGummi(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  wipeCanvas(){
  	var element = document.getElementsByTagName("canvas"), index;
  	console.log("wipe canvas", element);
	for (index = element.length - 1; index >= 0; index--) {
	    element[index].parentNode.removeChild(element[index]);
	}
  }
}
