import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable()
export class PublicFnService {

  constructor(

  ) {}

  public getTop(el): number {
    let top: number = 0;
    let cur = el;
    while (typeof cur.offsetTop === 'number') {
      top += cur.offsetTop;
      cur = cur.parentNode;
    }
    return top;
  }

  public $message(): void {
  }
}
