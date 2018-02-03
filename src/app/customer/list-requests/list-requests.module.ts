import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRequestsComponent } from './list-requests.component';
import { ListRequestsRoutingModule } from './list-requests-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListRequestsRoutingModule
  ],
  declarations: [ListRequestsComponent]
})
export class ListRequestsModule { }
