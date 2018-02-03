import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRequestsComponent } from './list-requests.component';

const routes: Routes = [
  {
    path: '',
    component: ListRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRequestsRoutingModule { }
