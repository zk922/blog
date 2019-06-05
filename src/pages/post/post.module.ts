import { NgModule } from '@angular/core';
import { PostComponent } from './post.component';
import PostRoutingModule from './post-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  exports: [
    PostComponent
  ],
  providers: []
})
export class PostModule {
}
