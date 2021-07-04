import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild
} from "@angular/core";
import { UsersCurrentUserFacade } from "../../../users/facades/users-current-user.facade";

@Component({
  selector: "app-main-container",
  templateUrl: "./main-container.component.html",
  styleUrls: ["./main-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit, AfterViewInit {
  @ViewChild("sidenav") sidenav;
  constructor(public usersCurrentUserFacade: UsersCurrentUserFacade) {}

  ngOnInit(): void {
    this.usersCurrentUserFacade.initStore();
  }

  ngAfterViewInit(): void {
    this.usersCurrentUserFacade.getCurrentUser();
  }

  toggleMenu(): void {
    this.sidenav.toggle();
  }
}
