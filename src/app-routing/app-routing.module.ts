import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {DetailComponent} from '../app/detail/detail.component';

const routes: Routes = [
  {
    path: 'leds',
    component: DashboardComponent,
  },
  {
    path: 'leds/:index',
    component: DetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'leds'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
