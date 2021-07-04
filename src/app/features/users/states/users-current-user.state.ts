import { Injectable } from "@angular/core";
import { GeRxMethods } from "gerx/index.interface";
import { Observable, of } from "rxjs";
import { UsersCurrentUserInterface } from "../interfaces/users-current-user.interface";
import { UsersCurrentUserService } from "../services/users-current-user.service";

@Injectable({
  providedIn: "root"
})
export class UsersCurrentUserState {
  public entityName = "currentUser";
  public geRxMethods: GeRxMethods = {
    show: {
      main: this.showCurrentUser
    },
    edit: {
      main: this.editCurrentUser
    }
  };

  constructor(private mainCurrentUserService: UsersCurrentUserService) {}

  showCurrentUser(): Observable<UsersCurrentUserInterface> {
    return this.mainCurrentUserService.getCurrentUser();
  }

  editCurrentUser(
    userData: UsersCurrentUserInterface
  ): Observable<UsersCurrentUserInterface> {
    return this.mainCurrentUserService.patchCurrentUser(userData);
  }
}
