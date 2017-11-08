import { Component, OnInit } from '@angular/core';
// services must be imported before they're injected!!
import { HttpService } from './../http.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  // here we define attributes for our component
  username;
  score;

  // inject the http service PRIVATELY
  // if you do not make this private, you will
  // have scope issues!
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  // METHOD 1 - SUBSCRIBE IN THE SERVICE

  // in this method, we must pass the data AND a callback
  // into the service. the callback will allow us to wait
  // for the HTTP request to come back with our data

  // onSubmit() {
  //   this._httpService.getUserInfo(this.username, (res) => {
  //     this.score = res;
  //     console.log(this.score);
  //   });
  // };



  // METHOD 2 - SUBSCRIBE IN THE COMPONENT

  // in this method, .getUserInfo() is RETURNING an object.
  // from that object, we chain on .subscribe and write our two
  // result callbacks.

  onSubmit() {
    this._httpService.getUserInfo(this.username)
      .subscribe(
        (response) => {                   // .subscribe will load the HTTP response into the first callback!
          this.score = response.json();   // update the score and we're ready to display it!
          console.log(this.score);
         },
        (err) => {console.log(err); }     // this second callback is for when the server does not properly respond
     );
    this.username = undefined;
  }

}
