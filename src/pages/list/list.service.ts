import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Injectable()
export class ListService {
  constructor(
    public http: HttpClient
  ) {}

  public getList(): Observable<any[]> {
    return of([{title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      // {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
      {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'}]).pipe(delay(1000));
  }

}
