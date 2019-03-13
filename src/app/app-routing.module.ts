import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {BuscarIdComponent} from './buscar-id/buscar-id.component';
import {BuscarCodpostalComponent} from './buscar-codpostal/buscar-codpostal.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'buscar/id', component: BuscarIdComponent},
  {path: 'buscar/codpostal', component: BuscarCodpostalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
