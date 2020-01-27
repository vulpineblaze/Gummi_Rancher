import { Component, OnInit, NgZone  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GummisService } from '../gummis.service';

// import User from './User';

declare var gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  

  constructor(private route: ActivatedRoute, 
  							private ps: GummisService,
  							private ngZone: NgZone,
                private router: Router) { }

  ngOnInit() {
  	var auth2;
	  gapi.load('auth2', function(){
	    auth2 = gapi.auth2.init({
	        client_id: '498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com'
	    });
		}); 
		this.ps.auth2 = auth2;
  }


  ngAfterViewInit() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': param => this.ngZone.run(() => this.onSignIn(param)) 
    });
	}

	public onSignIn(googleUser) {
	    // var gUser : User = new User();

	    // console.log(googleUser.getBasicProfile());
	    // ((u, p) => {
	    //     u.id            = p.getId();
	    //     u.name          = p.getName();
	    //     u.email         = p.getEmail();
	    //     u.imageUrl      = p.getImageUrl();
	    //     u.givenName     = p.getGivenName();
	    //     u.familyName    = p.getFamilyName();
	    // })(gUser, googleUser.getBasicProfile());

	    // ((u, r) => {
	    //     u.token         = r.id_token;
	    // })(gUser, googleUser.getAuthResponse());

	    // console.log(gUser);
	    // console.log(gUser.givenName);

	    // user.save();
	    // this.goHome();
	    // this.user = gUser; 
	    // this.testt = "TESTT";
	    // this.user = googleUser; 
	    // console.log(this.user);
	    // this.user = "just trying";
	  var auth2;
	  gapi.load('auth2', function(){
	    auth2 = gapi.auth2.init({
	        client_id: '498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com'
	    });
		}); 
		this.ps.auth2 = auth2;
	  this.router.navigate(['detail']);
	};

}
