import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersCurrentUserContainerComponent } from "./containers/users-current-user-container/users-current-user-container.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersCurrentUserInfoComponent } from "./components/users-current-user-info/users-current-user-info.component";
import { UsersCurrentUserEditComponent } from "./components/users-current-user-edit/users-current-user-edit.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    UsersCurrentUserContainerComponent,
    UsersCurrentUserInfoComponent,
    UsersCurrentUserEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class UsersModule {}
