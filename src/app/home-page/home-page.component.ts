import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PostsService} from "../admin/shared/posts.service";
import {Post} from "../shared/user.interface";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // @ts-ignore
  posts$: Observable<Post[]>

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.posts$ = this.postsService.getAll()
  }

}
