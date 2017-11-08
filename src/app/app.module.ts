import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// need to import our service manually
import { HttpService } from './http.service';

// need to import http and forms modules
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // make sure you import forms and http directly to the module
    HttpModule
  ],
  providers: [
    HttpService // make sure you provide the service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
