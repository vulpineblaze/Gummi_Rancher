import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';



// import { AuthService } from "angularx-social-login";
// import { GoogleLoginProvider } from "angularx-social-login";
// import { SocialUser } from "angularx-social-login";
 
declare var gapi: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gummi Rancher';

  // private user: SocialUser;
  // private loggedIn: boolean;


  // user: any = {};

  constructor(private loadingBar: SlimLoadingBarService, 
  					private router: Router
  				) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
  	
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    // });
  //   var auth2;
		// var googleUser;

  //   gapi.load('auth2', function(){
		//     auth2 = gapi.auth2.init({
		//         client_id: '498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com'
		//     });
		//     // auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);

		//     // auth2.isSignedIn.listen(signinChanged);
		//     // auth2.currentUser.listen(userChanged); // This is what you use to listen for user changes
		//     if(auth2.isSignedIn.get()){
		//     	console.log("auth");
		//     	this.user = "something";
		//     }else{
		//     	console.log("auth failed");
		//     }
		// });  
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
 
  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // } 
 
  // signOut(): void {
  //   this.authService.signOut();
  // }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }

  

}
