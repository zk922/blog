import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentModule } from '../environments/environment.module';
import {ListModule} from '../pages/list/list.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    EnvironmentModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
