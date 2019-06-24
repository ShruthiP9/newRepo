import { ServService } from './serv.service';
import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';    
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
 
    
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
