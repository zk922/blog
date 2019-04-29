import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EnvironmentModule} from '../environments/environment.module';
import {ListModule} from '../pages/list/list.module';
import {CommonModule} from '@angular/common';
import {ArticleModule} from '../pages/article/article.module';
import {PostModule} from '../pages/post/post.module';
import {Page404Module} from '../pages/page404/page404.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    EnvironmentModule,
    ListModule,
    ArticleModule,
    PostModule,
    Page404Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
