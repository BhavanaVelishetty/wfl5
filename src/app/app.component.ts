import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

declare var FB: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.status === 'connected') {
            alert(response.authResponse.accessToken);
          }
          if (response.authResponse)
          {
            //login success
            //login success code here
            //redirect to home page
            alert("login success");
           }
           else
           {
           console.log('User login failed');
         }
      });
      FB.api('/me', function(response) {
        alert(JSON.stringify(response));
    });
    
  }

  ngOnInit() {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '536914410173496',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.3'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }

}
