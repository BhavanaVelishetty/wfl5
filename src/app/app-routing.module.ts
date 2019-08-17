import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoogleloginComponent } from './googlelogin/googlelogin.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
const routes: Routes = [
  {
    path:'',
    component:FirstpageComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:GoogleloginComponent
  },
  {
    path:'first',
    component:FirstpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
