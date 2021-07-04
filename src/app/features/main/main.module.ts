import { NgModule } from "@angular/core";
import { MainContainerComponent } from "./containers/main-container/main-container.component";
import { MainHeaderComponent } from "./components/main-header/main-header.component";
import { MainFooterComponent } from "./components/main-footer/main-footer.component";
import { MainRoutingModule } from "./main-routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [
    MainContainerComponent,
    MainHeaderComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MainModule {}
