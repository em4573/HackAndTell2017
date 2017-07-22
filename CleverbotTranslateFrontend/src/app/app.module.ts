import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConvoComponent } from './convo/convo.component';
import {ConvocontrollerService} from './convocontroller.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConvoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConvocontrollerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
