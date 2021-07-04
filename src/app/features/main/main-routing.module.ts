import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent, 
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then(
            (m) => m.AboutModule
          ),
      },
    ]   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}