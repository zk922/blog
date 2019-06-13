import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Page404Component} from '../pages/page404/page404.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', loadChildren: '../pages/list/list.module#ListModule'},
  {path: 'list', loadChildren: '../pages/list/list.module#ListModule'},
  {path: 'article', loadChildren: '../pages/article/article.module#ArticleModule'},
  {path: 'post', loadChildren: '../pages/post/post.module#PostModule'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
