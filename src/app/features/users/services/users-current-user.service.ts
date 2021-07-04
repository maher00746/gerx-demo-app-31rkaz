import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { UsersCurrentUserInterface } from "../interfaces/users-current-user.interface";

@Injectable({
  providedIn: "root"
})
export class UsersCurrentUserService {
  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<UsersCurrentUserInterface> {
    const data = {
      fullName: "Username",
      photo: "sentiment_satisfied_alt",
      organization: {
        name: "Orgname",
        logo: "flutter_dash"
      }
    };
    return of(data).pipe(delay(3000));
  }

  patchCurrentUser(
    data: UsersCurrentUserInterface
  ): Observable<UsersCurrentUserInterface> {
    return of(data).pipe(delay(3000));
  }
}
