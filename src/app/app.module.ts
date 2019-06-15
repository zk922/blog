import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvironmentModule } from '../environments/environment.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Page404Module } from '../pages/page404/page404.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';
import { CommonComponentsModule } from '../common/common-components.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    EnvironmentModule,
    Page404Module,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
