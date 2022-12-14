import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private auth: AuthService
  ) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  // @ts-ignore
    Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return true
    } else {
      this.auth.logout()
      this.router.navigate(['/admin', 'login'], {
        queryParams: {
          loginAgain: true
        }
      })
    }
  }
}
