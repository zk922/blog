import {Component, Inject} from '@angular/core';
import {envToken} from '../environments/environment.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(envToken)env
  ) {
    console.log(env.env);
  }
  title = 'blog';
}
