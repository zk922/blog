import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EnvironmentModule} from '../environments/environment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnvironmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
