import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutPageContainerComponent } from './containers/about-page-container/about-page-container.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageContainerComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}