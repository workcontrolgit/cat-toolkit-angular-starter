import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

//import { ToastComponent } from '@shared/toast/toast.component';
//import { ToastsContainer } from './toasts-container.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DetailRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RxReactiveFormsModule,
  ],
  declarations: [DetailComponent],
})
export class DetailModule {}
