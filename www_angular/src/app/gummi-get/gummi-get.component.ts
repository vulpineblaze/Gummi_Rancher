import { Component, OnInit } from '@angular/core';
import Gummi from '../Gummi';
import { GummisService } from '../gummis.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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

	gummis: Gummi[];
	user: any = {};
	// givenName: string;
	// private user: SocialUser;
 //  private loggedIn: boolean;

	constructor(private http: HttpClient, private ps: GummisService) { }

	

  ngOnInit() {
  	var auth2;
		var googleUser;
		gapi.load('auth2', function(){
	    auth2 = gapi.auth2.init({
	        client_id: '498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com'
	    });
		}); 
    this.ps
      .getGummis()
      .subscribe((data: Gummi[]) => {
        this.gummis = data;
        if(auth2.isSignedIn.get()){
		    	// var gUser = auth2.currentUser.get().getBasicProfile();
		    	// console.log("gUser", gUser);
		    	// // this.givenName = gUser.getGivenName();
		    	// this.givenName = "testtt";
		    	// this.user = gUser;
		    	this.user = auth2.currentUser.get().getBasicProfile();
		    	console.log("this.user", this.user);

		    }else{
		    	console.log("auth failed");
		    }
    });

  // ngOnInit() {
  // 	var auth2;
		// var googleUser;
  //   this.ps
  //     .getGummis()
  //     .subscribe((data: Gummi[]) => {
  //       this.gummis = data;
  //       gapi.load('auth2', function(){
		// 	    auth2 = gapi.auth2.init({
		// 	        client_id: '498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com'
		// 	    });
		// 	    if(auth2.isSignedIn.get()){
		// 	    	var gUser = auth2.currentUser.get().getBasicProfile();
		// 	    	console.log("gUser", gUser);
		// 	    	// this.givenName = gUser.getGivenName();
		// 	    	this.givenName = "testtt";
		// 	    	this.user = gUser;
		// 	    	console.log("this.user", this.user);

		// 	    }else{
		// 	    	console.log("auth failed");
		// 	    }
		// 		}); 
  //   });
    

     
  }

}
