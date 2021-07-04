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
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersCurrentUserInterface } from "../../interfaces/users-current-user.interface";

@Component({
  selector: "app-users-current-user-edit",
  templateUrl: "./users-current-user-edit.component.html",
  styleUrls: ["./users-current-user-edit.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersCurrentUserEditComponent implements OnChanges, OnInit {
  form: FormGroup;

  @Input() userData$: UsersCurrentUserInterface;
  @Input() userData: UsersCurrentUserInterface;
  @Input() loading$: boolean;
  @Output() formSubmit = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form && changes.userData$ && changes.userData$.currentValue) {
      this.form.patchValue(this.userData$);
    }
    if (
      this.form &&
      changes.loading$ &&
      typeof changes.loading$.currentValue === "boolean"
    ) {
      if (this.loading$) {
        this.form.disable();
      } else {
        this.form.enable();
      }
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ["", Validators.required],
      photo: [""],
      organization: this.fb.group({
        name: ["", Validators.required],
        logo: [""]
      })
    });
    this.form.patchValue(this.userData);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
