import {Component, OnInit} from '@angular/core';
import {PostsService} from "../shared/posts.service";
import {ActivatedRoute, Params} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription, switchMap} from "rxjs";
import {Post} from "../../shared/interfaces";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
//@ts-ignore
  form: FormGroup
  //@ts-ignore
  uSub: Subscription
  //@ts-ignore
  submitted: boolean
  //@ts-ignore
  post: Post

  constructor(private postsService: PostsService,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
        return this.postsService.getById(params['id'])
      })
    ).subscribe((post: Post) => {
      this.post = post
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      })
    })
  }


  submit() {
    if (this.form.invalid) {
      return
    }
    this.submitted = true
    this.uSub = this.postsService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title,
    }).subscribe(() => {
      this.submitted = false
    })
  }

}
