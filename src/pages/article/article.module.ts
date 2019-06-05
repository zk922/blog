import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { CommonModule } from '@angular/common';
import ArticleRoutingModule from './article-routing.module';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    ArticleRoutingModule,
    CommonModule
  ],
  exports: [
    ArticleComponent
  ],
  providers: []
})
export class ArticleModule {}
