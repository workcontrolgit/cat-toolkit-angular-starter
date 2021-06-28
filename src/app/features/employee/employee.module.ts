import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [EmployeeComponent, DetailComponent],
  imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
