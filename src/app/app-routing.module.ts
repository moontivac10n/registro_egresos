import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/formulario/usuarios/usuarios.component';
import { EgresosComponent } from './componentes/formulario/egresos/egresos.component';
import { VerUsuariosComponent } from './componentes/vista/usuarios/usuarios.component';
import { VerEgresosComponent } from './componentes/vista/egresos/egresos.component';
import { VerEgresosUsuarioComponent } from './componentes/vista/egresos-usuario/egresos-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'egresos',
    component: EgresosComponent
  },
  {
    path: 'ver-usuarios',
    component: VerUsuariosComponent
  },
  {
    path: 'ver-egresos',
    component: VerEgresosComponent
  },
  {
    path: 'ver-egresos-usuarios',
    component: VerEgresosUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
