import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";
import { UsersCurrentUserInterface } from "../../../users/interfaces/users-current-user.interface";

@Component({
  selector: "app-main-header",
  templateUrl: "./main-header.component.html",
  styleUrls: ["./main-header.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnChanges, OnInit {
  @Input() userData$: UsersCurrentUserInterface;
  @Output() toggleMenu = new EventEmitter();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  onToggleMenu(): void {
    this.toggleMenu.emit();
  }
}
