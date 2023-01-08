import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { ActiveUserGQL } from "./active-user.generated";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private activeUserGQL: ActiveUserGQL, private apollo: Apollo) { }

  activeUser(): Observable<boolean> {
    return new Observable<boolean>(obs => {
      this.activeUserGQL.watch().valueChanges.subscribe(({ data }) => {
        if (data.activeUser?.id) {
          obs.next(true);
        } else {
          obs.next(false);
        }
      });
    })
  }

  logOutUser() {
    sessionStorage.removeItem("token");
    this.apollo.client.clearStore();
  }
}