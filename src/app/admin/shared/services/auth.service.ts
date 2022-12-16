import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../../../shared/user.interface";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  get token(): string {
    return ''
  }

  login(user: User): Observable<any> {

    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(
          this.setToken
        )
      )
  }


  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  // @ts-ignore
  private setToken(response) {
    console.log(response)
  }

}
