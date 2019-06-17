import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicFnService } from './public-fn.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PublicFnService
  ]
})
export class CommonComponentsModule { }
