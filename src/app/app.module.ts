import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { IndexComponent } from './index/index.component';
import { BuscarIdComponent } from './buscar-id/buscar-id.component';
import { BuscarCodpostalComponent } from './buscar-codpostal/buscar-codpostal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MargenesPipe } from './services/margenes.pipe';
import { GasolineraComponent } from './gasolinera/gasolinera.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    IndexComponent,
    BuscarIdComponent,
    BuscarCodpostalComponent,
    MargenesPipe,
    GasolineraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
