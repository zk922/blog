import {NgModule} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {environment} from './environment';

export const envToken = new InjectionToken('env');
@NgModule({
  imports: [],
  exports: [],
  providers: [
    {provide: envToken, useFactory: () => environment }
  ]})
export class EnvironmentModule {}

