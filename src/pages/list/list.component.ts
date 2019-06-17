import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListService } from './list.service';
import { PublicFnService } from '../../common/public-fn.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('show', [
      state('start', style({ opacity: 0})),
      state('end', style({ opacity: 1})),
      transition('start => end', [animate('.2s')])
    ])
  ]
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(
    public router: Router,
    public listService: ListService,
    public publicFn: PublicFnService,
    public rootView: ViewContainerRef
  ) {
    window['a'] = this;
  }
  public list: any[] = [];


  // 监听滚动事件
  public scrollEvent: Observable<any> = fromEvent(window, 'scroll').pipe(
    filter(() => !(this.loading === 1) && ((document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight + 20 > document.documentElement.scrollHeight))
  );
  public subscribeScrollEvent: Subscription;

  // 加载请求状态，0未请求，1请求中，2请求成功，3请求失败
  public loading: number = 0;

  public page: number = 0;

  @ViewChild('listWrap', { static: false })
  public listWrap: ElementRef;

  ngOnInit() {
    this.subscribeScrollEvent = this.scrollEvent.subscribe(() => this.loadList());
    this.loadList();
  }
  ngOnDestroy() {
    this.subscribeScrollEvent.unsubscribe();
  }
  public navTo(path: string) {
    this.router.navigateByUrl(path);
  }

  /**
   * 加载列表
   */
  public loadList() {
    this.loading = 1;
    const subscription: Subscription = this.listService.getList().subscribe(
    data => {
      this.loading = 2;
      this.list.push(...data);
      let idx = 0;
      const showInterval = setInterval(function() {
        data[idx].show = true;
        if (!data[++idx]) {
          clearInterval(showInterval);
        }
      }, 70);
    },
    err => {
      this.loading = 3;
    },
    () => {
      subscription.unsubscribe();
    });
  }
}
