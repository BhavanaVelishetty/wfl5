import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleloginComponent } from './googlelogin/googlelogin.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import {FreeapiService}from './services/freeapi.service';
import {enableProdMode} from '@angular/core';
import { FirstpageComponent } from './firstpage/firstpage.component';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    GoogleloginComponent,
    HomeComponent,
    QuestionsComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FreeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
