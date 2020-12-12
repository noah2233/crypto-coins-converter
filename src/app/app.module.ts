import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CoinsComponent } from './components/coins/coins.component';

// services
import { CoinsService } from './services/coins-service/coins.service';
import { HttpApiKeyInterceptorService } from './services/http-apiKey-interceptor/http-api-key-interceptor.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ConverterComponent, CoinsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  providers: [
    CoinsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApiKeyInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
