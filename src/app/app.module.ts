import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MasterModule } from './master/master.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FallbackComponent } from './fallback.component';
import { ShouldLoginComponent } from './should-login.component';
//import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule.forRoot(),
    SharedModule,
    ShellModule,
    MasterModule,
  //   RouterModule.forRoot([
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     // Note: this way of module loading requires this in your tsconfig.json: "module": "esnext"
  //     { path: 'should-login', component: ShouldLoginComponent },
  //     { path: '**', component: FallbackComponent },
  // ], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    FallbackComponent,
    ShouldLoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
