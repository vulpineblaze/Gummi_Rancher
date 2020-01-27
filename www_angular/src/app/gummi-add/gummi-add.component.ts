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
	gummi: any = {};
	hasNoGummi: boolean = false;


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
    this.router.navigate(['detail']);
  }

  ngOnInit() {
  	var auth2 = this.ps.auth2;
    if(auth2.isSignedIn.get()){
    	// var gUser = auth2.currentUser.get().getBasicProfile();
    	// console.log("gUser", gUser);
    	// // this.givenName = gUser.getGivenName();
    	// this.givenName = "testtt";
    	// this.user = gUser;
    	this.user = auth2.currentUser.get().getBasicProfile();
    	console.log("this.user", this.user);

    	this.ps.myDetailGummi(this.user.getEmail()).subscribe(res => {
      	console.log("my detail res:", res);
        this.gummi = res;
		        
        if(!res){
        	this.hasNoGummi = true;
        }
      });

    }else{
    	console.log("auth failed, nav to /login");
	    this.router.navigate(['login']);
    }
  }

}
