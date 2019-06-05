import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PostComponent } from './post.component';

const routes: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full'},
  { path: ':flag', component: PostComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class PostRoutingModule {}
