import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './_services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_helpers/auth-guard/auth-guard.service';
import { httpInterceptorProviders } from './_helpers/http-interceptors';
import { MarketplaceComponent } from './catalog/marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketplaceComponent    
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot([]),
    LayoutModule,
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
