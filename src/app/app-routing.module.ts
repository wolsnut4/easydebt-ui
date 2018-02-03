import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './customer/list-requests/list-requests.module#ListRequestsModule',
    pathMatch: 'full'
  },

  // Launcher
  {
    path: '_nuevo',
    loadChildren: './customer/request/request.module#RequestModule',
    data: {
      title: 'Launcher'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
