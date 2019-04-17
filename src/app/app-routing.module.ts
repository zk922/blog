import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../pages/list/list.component';
import { ArticleComponent } from '../pages/article/article.component';
import { PostComponent } from '../pages/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ListComponent },
  { path: 'article/:id', component: ArticleComponent},
  { path: 'edit/:id', component: PostComponent},
  { path: 'newPost', component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
