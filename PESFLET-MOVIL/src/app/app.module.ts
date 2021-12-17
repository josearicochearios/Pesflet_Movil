import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { CasaComponent } from './components/casa/casa.component';
import { HttpClientModule } from '@angular/common/http';
import { GuiaComponent } from './components/guia/guia.component';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent,
    CasaComponent,
    GuiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
