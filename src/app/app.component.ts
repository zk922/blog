import { Component, Inject, OnDestroy } from '@angular/core';
import { envToken } from '../environments/environment.module';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  constructor(
    @Inject(envToken)env
  ) {
    console.log(env.env);
  }


  public title = 'blog';
  public isCollapsed: boolean = true;
  public xsScreen: boolean = AppComponent.isXsScreen();
  public resizeEvent: Subscription = fromEvent(window, 'resize').pipe(map(() => AppComponent.isXsScreen())).subscribe(v => this.xsScreen = v);
  static isXsScreen(): boolean {
    return window.document.documentElement.clientWidth < 480;
  }


  ngOnDestroy(): void {
    this.resizeEvent.unsubscribe();
  }
}
