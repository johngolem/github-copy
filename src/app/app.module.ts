import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators'
import { ApifService } from './apif.service';
import { DisplayComponent } from './display/display.component';
import { ReposComponent } from './repos/repos.component';
  

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent,
    ReposComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
