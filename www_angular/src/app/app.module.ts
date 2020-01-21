import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
// import { GoogleLoginProvider } from "angularx-social-login";
 
import { GummisService } from './gummis.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GummiAddComponent } from './gummi-add/gummi-add.component';
import { GummiGetComponent } from './gummi-get/gummi-get.component';
import { GummiMergeComponent } from './gummi-merge/gummi-merge.component';
import { GummiGrindComponent } from './gummi-grind/gummi-grind.component';
import { LoginComponent } from './login/login.component';

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("498292554111-43rgrleo1mirru53r7ll2htqe86fcpco.apps.googleusercontent.com")
//   }
// ]);
 
// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    GummiAddComponent,
    GummiGetComponent,
    GummiMergeComponent,
    GummiGrindComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GummisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
