import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../shared/user.interface";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  // @ts-ignore
  @Input()post:Post

  constructor() { }

  ngOnInit(): void {
  }

}
