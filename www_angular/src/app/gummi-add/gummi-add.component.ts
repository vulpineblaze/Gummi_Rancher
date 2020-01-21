import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GummisService } from '../gummis.service';

declare var gapi: any;



@Component({
  selector: 'app-gummi-add',
  templateUrl: './gummi-add.component.html',
  styleUrls: ['./gummi-add.component.css']
})
export class GummiAddComponent implements OnInit {

	user: any = {};

  angForm: FormGroup;
  constructor(private fb: FormBuilder, 
  				private route: ActivatedRoute, 
  				private router: Router, 
  				private ps: GummisService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      GummiName: ['', Validators.required ],
      GummiMakeAWish: ['', Validators.required ]
    });
  }

  addGummi(GummiName, GummiMakeAWish) {
  	var GummiOwner = this.user.getEmail();
    this.ps.addGummi(GummiName, GummiMakeAWish, GummiOwner);
    this.router.navigate(['gummis']);
  }

  ngOnInit() {
  	var auth2;
		var googleUser;
		gapi.load('auth2', function(){
	    auth2 = gapi.auth2.init({
	        client_id: '498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com'
	    });
		}); 
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
  }

}
