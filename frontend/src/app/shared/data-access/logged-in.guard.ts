import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../../shared/data-access/user.service";

@Injectable({
  providedIn: "root"
})

export class LoggedInGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>(obs => {
      this.userService.activeUser().subscribe(result => {
        if (!result) {
          obs.next(true);
        } else {
          this.router.navigate(["/"]);
          obs.next(false);
        }
      })
    })
  }
}