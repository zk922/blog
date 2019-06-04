import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleComponent
  ],
  providers: []
})
export class ArticleModule {}
