import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './miscomponentes/header/header.component';
import { LogosComponent } from './miscomponentes/logos/logos.component';
import { RedessocialesComponent } from './miscomponentes/redessociales/redessociales.component';
import { BanerComponent } from './miscomponentes/baner/baner.component';
import { AcercademiComponent } from './miscomponentes/acercademi/acercademi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    RedessocialesComponent,
    BanerComponent,
    AcercademiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
