import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    MasterRoutingModule,
    DataTablesModule,
    FormsModule],
  declarations: [MasterComponent],
})
export class MasterModule {}
