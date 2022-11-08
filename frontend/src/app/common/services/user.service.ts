import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CurrentUserGQL } from 'src/app/auth/graphql/auth.generated';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private currentUserGQL: CurrentUserGQL, private apollo: Apollo) { }

  activeUser(): Observable<boolean> {
    return new Observable<boolean>(obs => {
      this.currentUserGQL.watch().valueChanges.subscribe(({ data }) => {
        if (data.currentUser?.id) {
          obs.next(true);
        } else {
          obs.next(false);
        }
      }, error => {
        console.error("Error finding current user", error);
        obs.next(false);
      })
    })
  }

  signOutUser() {
    sessionStorage.removeItem("token");
    this.apollo.client.clearStore();
  }
}
