import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GummisService {

  uri = 'http://'+window.location.hostname+'/gummis';

  constructor(private http: HttpClient) { }

  addGummi(GummiName) {
    const obj = {
      GummiName
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getGummis() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editGummi(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateGummi(GummiName, id) {
    const obj = {
      GummiName
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteGummi(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
