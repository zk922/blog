import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fromEvent, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(
    public router: Router,
    public http: HttpClient
  ) {
    console.log(http);
  }
  public list: any[] = [
    {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
    {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
    {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'}
  ];

  public getArticleList: Observable<any> = fromEvent(window, 'scroll').pipe(map(e => {}));
  public fetchingData = false;

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  public navTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
