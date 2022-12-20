import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {FbCreateResponse, Post} from "../../shared/user.interface";
import {environment} from "../../../environments/environment";

@Injectable({providedIn: 'root'})

export class PostsService {
  constructor(private http: HttpClient) {
  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.FbDbUrl}/posts.json`, post)
      // @ts-ignore
      .pipe(map((response: FbCreateResponse) => {
            return {
              ...post,
              id: response.name,
              date: new Date()
            }
          }))
  }
}
