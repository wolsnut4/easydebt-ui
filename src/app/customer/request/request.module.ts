import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { RequestRoutingModule } from './request-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule
  ],
  declarations: [RequestComponent]
})
export class RequestModule { }
