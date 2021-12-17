import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaComponent } from './components/casa/casa.component';
import { GuiaComponent } from './components/guia/guia.component';
import { SesionComponent } from './components/sesion/sesion.component';

const routes: Routes = [
  { 
    path: '', component:SesionComponent
  },
  { 
    path: 'vistas/casa', component:CasaComponent
  },
  { 
    path: 'vistas/guia', component:GuiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
