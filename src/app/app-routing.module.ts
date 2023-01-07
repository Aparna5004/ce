import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HelppageComponent } from './helppage/helppage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CyviewComponent } from './cyview/cyview.component';
import { FilterpageComponent } from './filterpage/filterpage.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
const routes: Routes = [
  { path: "sidenav", component: SidenavComponent },
  { path: "helppage", component: HelppageComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "cyview", component: CyviewComponent },
  { path: "filterpage", component: FilterpageComponent },
  { path: "account-setting", component: AccountSettingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
