import {NgModule} from '@angular/core';
import {ListComponent} from './list.component';
import {CommonModule} from '@angular/common';
import ListRoutingModule from './list-routing.module';
import {ListService} from './list.service';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  exports: [
    ListComponent
  ],
  providers: [
    ListService
  ]
})
export class ListModule {}
