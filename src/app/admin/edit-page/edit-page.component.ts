import {Component, OnInit} from '@angular/core';
import {PostsService} from "../shared/posts.service";
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {switchMap} from "rxjs";
import {Post} from "../../shared/user.interface";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
//@ts-ignore
  form: FormGroup

  constructor(private postsService: PostsService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
        return this.postsService.getById(params['id'])
      })
    ).subscribe((post: Post) => {
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      })
    })
  }


  submit() {

  }
}
