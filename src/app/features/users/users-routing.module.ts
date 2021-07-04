import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCurrentUserContainerComponent } from './containers/users-current-user-container/users-current-user-container.component';

const routes: Routes = [
  {
    path: '',
    component: UsersCurrentUserContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}