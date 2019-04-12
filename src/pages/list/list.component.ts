import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  public list: any[] = [
    {t: 1}, {t: 2}, {t: 3}
  ];
  ngOnInit() {
  }
}
