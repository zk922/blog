import {NgModule} from '@angular/core';
import {ListComponent} from './list.component';
import {CommonModule} from '@angular/common';
import ListRoutingModule from './list-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ListRoutingModule
  ],
  exports: [
    ListComponent
  ],
  providers: []
})
export class ListModule {}
