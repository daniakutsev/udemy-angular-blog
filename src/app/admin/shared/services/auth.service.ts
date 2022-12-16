import {Injectable} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../shared/user.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClientModule) {
  }

  get token(): string {
    return ''
  }

  login(user: User): Observable<any> {
    // @ts-ignore
    return this.http.post('', user)
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken() {

  }

}
