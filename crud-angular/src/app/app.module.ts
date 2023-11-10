import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, POSITION, SPINNER } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastHelper } from './shared/helpers/toast.helper';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#9c27b0',
  fgsColor: '#9c27b0',
  pbColor: '#9c27b0',
   bgsPosition: POSITION.centerCenter,
  bgsSize: 120,
  bgsType: SPINNER.squareJellyBox, // background spinner type
  fgsType: SPINNER.squareJellyBox, // foreground spinner type
  pbThickness: 5, // progress bar thickness
  hasProgressBar: false,
  maxTime: 5000,
  minTime: 1000,
  fastFadeOut: true,
  bgsOpacity: 0.7,
  masterLoaderId: "loaderId"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ToastrModule.forRoot(),
  ],
  providers: [
    ToastHelper,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    provideAnimations(), // required animations providers
    provideToastr(), //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
