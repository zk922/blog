import {Injectable} from '@angular/core';

@Injectable()
export class PublicFnService {
  public getTop(el): number {
    let top: number = 0;
    let cur = el;
    for (let i = 0; cur; i++, cur = cur.parentNode) {
      top += cur.offsetTop;
    }
    return top;
  }
}
