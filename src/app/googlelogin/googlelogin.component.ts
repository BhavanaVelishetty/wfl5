import { Component,ElementRef, AfterViewInit,NgZone } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
declare const gapi: any;
@Component({
  selector: 'app-googlelogin',
  templateUrl: './googlelogin.component.html',
  styleUrls: ['./googlelogin.component.css']
})
export class GoogleloginComponent implements AfterViewInit {

  private clientId:string = '580563703472-tq9bcacgq0dtd8268qlkadksgaopstmf.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    //'https://www.googleapis.com/auth/contacts.readonly',
    //'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');
  public auth2: any;
  mail:any="tejaswini21nalla@gmail.com";
  public googleInit() {       
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        
        let profile = googleUser.getBasicProfile();
        let token=googleUser.getAuthResponse().id_token;
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
         console.log('Email: ' + profile.getEmail()); 
         if(profile.getEmail()==this.mail){
         alert("signed in");
         
         }
         else
         alert("Registered successfully");
         this.navigate(profile.getName(),profile.getEmail());
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }
 
  navigate(name,Email)
  {
    this.ngZone.run(() =>this.router.navigate(['/home',{'n':name}])).then();
    this.ngZone.run(() =>this.router.navigate(['/home',{'m':Email}])).then();

    
  }
  
  /*public signOut()
  {
    
    console.log("entered signout");
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    
  }*/
  constructor(private element: ElementRef,private router:Router,private ngZone:NgZone,private http:HttpClient) { }

  ngAfterViewInit() {
    this.googleInit();
  }
  

}
