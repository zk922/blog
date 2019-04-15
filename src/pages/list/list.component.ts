import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    public router: Router
  ) { }
  public list: any[] = [
    {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
    {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'},
    {title: '去微软推哦哦i破iu哦怕怕怕', tags: [], date: '2019-03-04'}
  ];
  ngOnInit() {
  }
  public navTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
