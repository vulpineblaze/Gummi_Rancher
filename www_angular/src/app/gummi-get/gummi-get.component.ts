import { Component, OnInit, ViewChild } from '@angular/core';
import Gummi from '../Gummi';
import { GummisService } from '../gummis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { API, APIDefinition } from 'ngx-easy-table';


// import { AuthService } from "angularx-social-login";
// import { GoogleLoginProvider } from "angularx-social-login";
// import { SocialUser } from "angularx-social-login"; 
declare var gapi: any;



const httpOptions = {
  headers: new HttpHeaders({ "Authorization": "Bearer d849acc0-66e6-4f17-8405-5e0a85cf7833" })
};

@Component({
  selector: 'app-gummi-get',
  templateUrl: './gummi-get.component.html',
  styleUrls: ['./gummi-get.component.css']
})
export class GummiGetComponent implements OnInit {
	@ViewChild('table', { static: true }) table: APIDefinition;

	gummis: Gummi[];
	user: any = {};
	// givenName: string;
	// private user: SocialUser;
 //  private loggedIn: boolean;
 	public configuration: Config;
  public columns: Columns[];
  public data: Gummi[] = [];
  public toggledRows = new Set<number>();

	constructor(private http: HttpClient, 
  				private router: Router, 
					private ps: GummisService) { }


  ngOnInit() {
  	var auth2 = this.ps.auth2;
    if(auth2.isSignedIn.get()){

    	this.user = auth2.currentUser.get().getBasicProfile();
    	// console.log("this.user", this.user);

    	this.columns = [
		    { key: 'GummiName', title: 'Name', width: '15%', orderEnabled: true, searchEnabled: true },
		    { key: 'GummiPrimary', title: 'Primary', width: '15%', orderEnabled: true, searchEnabled: false },
		    { key: 'GummiSecondary', title: 'Secondary', width: '15%', orderEnabled: true },
		    { key: 'GummiOwner', title: 'Owner', width: '15%', orderEnabled: false },
		    { key: 'GummiStatus', title: 'Status', width: '15%', orderEnabled: false },
		    { key: 'GummiLastFed', title: 'Last Fed', width: '15%', orderEnabled: true },
		    { key: '', title: 'Action', width: '5%', orderEnabled: false, searchEnabled: false },
		  ];

	    // this.data = data;
	    this.configuration = { ...DefaultConfig };
	    this.configuration.detailsTemplate = true;
    	this.configuration.showDetailsArrow = false;

    	this.ps
	      .getMyGummis(this.user.getEmail())
	      .subscribe((data: Gummi[]) => {
	        this.gummis = data;
	    });

    }else{
    	console.log("auth failed, nav to /login");
	    this.router.navigate(['login']);
    }

  }


  onRowClickEvent($event: MouseEvent, index: number): void {
    $event.preventDefault();
    this.table.apiEvent({
      type: API.toggleRowIndex,
      value: index,
    });
    if (this.toggledRows.has(index)) {
      this.toggledRows.delete(index);
    } else {
      this.toggledRows.add(index);
    }
  }

}
