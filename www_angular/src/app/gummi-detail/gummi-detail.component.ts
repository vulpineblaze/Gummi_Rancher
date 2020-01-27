import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GummisService } from '../gummis.service';
// import * as tester from '../../assets/phaser/tester';
// import  Phaser from 'phaser';

declare var gapi: any;
declare const tester: any;

@Component({
  selector: 'app-gummi-detail',
  templateUrl: './gummi-detail.component.html',
  styleUrls: ['./gummi-detail.component.css']
})

export class GummiDetailComponent implements OnInit {

	gummi: any = {};
	user: any = {};
	hasGummi: boolean = false;


  constructor(private route: ActivatedRoute, 
                private router: Router, 
                private ps: GummisService, 
                private fb: FormBuilder) { }

  updateGummi(GummiName, id) {
  	// var GummiOwner = this.user.getEmail();
  	console.log("details update", GummiName);
    this.ps.updateGummi(GummiName, id);
    this.router.navigate(['detail']);
  }

  ngOnInit() {

  	// console.log(this.ps.uri);
  	

  	var auth2 = this.ps.auth2;
		// console.log(auth2);

  	this.route.params.subscribe(params => {
  		
			// gapi.load('auth2', function(){
		 //    auth2 = gapi.auth2.init({
		 //        client_id: '498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com'
		 //    });
			// }); 

  		if(auth2 && auth2.isSignedIn.get()){

	    	this.user = auth2.currentUser.get().getBasicProfile();
	    	console.log("this.user", this.user);

	    	if(params['id']){
	  			this.ps.detailGummi(params['id']).subscribe(res => {
		      	console.log("detail res:", res);
		        this.gummi = res;
		        
		        if(res){
		        	this.hasGummi = true;
		        	tester(this.gummi, this);
		        }
		      });
	  		}else{
	  			this.ps.myDetailGummi(this.user.getEmail()).subscribe(res => {
		      	console.log("my detail res:", res);
		        this.gummi = res;
		        
		        if(res){
		        	this.hasGummi = true;
		        	tester(this.gummi, this);
		        }
		      });
	  		}



	    }else{
	    	console.log("auth failed, nav to /login");
	    	this.router.navigate(['login']);
	    }
  		
    });
  }

  ngOnDestroy(){
  	var element = document.getElementsByTagName("canvas"), index;
  	console.log("wipe canvas", element);
		for (index = element.length - 1; index >= 0; index--) {
		    element[index].parentNode.removeChild(element[index]);
		}
  }
  

}
