import { Component, OnInit } from '@angular/core';
// import * as editormd from 'editor.md/editormd.js';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log(editormd());
  }

}
