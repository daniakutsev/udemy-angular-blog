import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../shared/posts.service";
import {Subscription} from "rxjs";
import {AlertService} from "../shared/services/alert.service";
import {Post} from "../../shared/interfaces";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  posts: Post[] = []
  // @ts-ignore
  pSub: Subscription
  // @ts-ignore
  dSub: Subscription
  searchStr = ''

  constructor(private postsService: PostsService,
              private alert: AlertService
  ) {
  }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts
    })
  }

  remove(id: any) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
      this.alert.warning('U successful delete post')
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.dSub) {
      this.dSub.unsubscribe()
    }

  }

}
