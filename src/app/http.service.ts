import { Injectable } from '@angular/core';
// import HTTP
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  // private variable storage
  private username;

  // inject HTTP PRIVATELY into the constructor
  constructor(private _http: Http) { }


  // METHOD 1 - SUBSCRIBE IN THE SERVICE

  // in this method, we pass in a callback, that callback is called and given the response
  // when subscribe hears the response. we must make sure to convert the res with .json()!

  // getUserInfo = function(username, callback){
  //   this._http.get(`https://api.github.com/users/${username}`)
  //     .subscribe(
  //       (response) => { callback(response.json()); },
  //       (err) => { console.log(err); }
  //     );
  // };


  // METHOD 2 - SUBSCRIBE IN THE COMPONENT

  // in this method, we return the http request object entirely, running .subscribe
  // on the component side. this lets us handle error messages uniquely for each component
  // using the service, and also removes the extra callback.

  getUserInfo = function(username){
    return this._http.post(`https://api.github.com/users/${username}`); // the biggest difference here is the return!
  };

}
