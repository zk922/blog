import {NgModule} from '@angular/core';
import {ListComponent} from './list.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListComponent
  ],
  providers: []
})
export class ListModule {}
