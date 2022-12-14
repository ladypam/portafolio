import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './miscomponentes/header/header.component';
import { LogosComponent } from './miscomponentes/logos/logos.component';
import { BanerComponent } from './miscomponentes/baner/baner.component';
import { AcercademiComponent } from './miscomponentes/acercademi/acercademi.component';
import { ExperienciaComponent } from './miscomponentes/experiencia/experiencia.component';
import { EducacionComponent } from './miscomponentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './miscomponentes/hys/hys.component';
import { ProyectosComponent } from './miscomponentes/proyectos/proyectos.component';
import { FooterComponent } from './miscomponentes/footer/footer.component';
import {  HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './miscomponentes/home/home.component';
import { LoginComponent } from './miscomponentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    BanerComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule .forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
