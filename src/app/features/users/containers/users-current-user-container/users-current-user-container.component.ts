import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { UsersCurrentUserFacade } from "../../facades/users-current-user.facade";
import { UsersCurrentUserInterface } from "../../interfaces/users-current-user.interface";

@Component({
  selector: "app-users-current-user-container",
  templateUrl: "./users-current-user-container.component.html",
  styleUrls: ["./users-current-user-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersCurrentUserContainerComponent implements OnInit {
  constructor(public usersCurrentUserFacade: UsersCurrentUserFacade) {}

  ngOnInit(): void {}

  editCurrentUser(userData: UsersCurrentUserInterface): void {
    this.usersCurrentUserFacade.patchCurrentUser(userData);
  }
}
