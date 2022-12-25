import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../../../admin/shared/posts.service";
import {Post} from "../../user.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // @ts-ignore
  @Input() post: Post

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
  }

}
