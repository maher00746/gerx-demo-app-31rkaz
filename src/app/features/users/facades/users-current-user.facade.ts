import { Injectable } from "@angular/core";
import { GeRx } from "gerx";
import { Observable } from "rxjs";
import { UsersCurrentUserInterface } from "../interfaces/users-current-user.interface";
import { UsersCurrentUserState } from "../states/users-current-user.state";

@Injectable({
  providedIn: "root"
})
export class UsersCurrentUserFacade {
  constructor(private geRx: GeRx, private store: UsersCurrentUserState) {}

  initStore(): void {
    this.geRx.addEntity(
      this.store.entityName,
      this.store.geRxMethods,
      this.store
    );
  }

  getCurrentUser(): void {
    this.geRx.show(this.store.entityName);
  }

  patchCurrentUser(userData: UsersCurrentUserInterface): void {
    this.geRx.edit(this.store.entityName, userData);
  }

  getData$(): Observable<UsersCurrentUserInterface> {
    return this.geRx.getData$(this.store.entityName);
  }

  getData(): UsersCurrentUserInterface {
    return this.geRx.getData(this.store.entityName);
  }

  loading$(): Observable<boolean> {
    return this.geRx.loading$(this.store.entityName);
  }
}
