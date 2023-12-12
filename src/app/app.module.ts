import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/formulario/usuarios/usuarios.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { EgresosComponent } from './componentes/formulario/egresos/egresos.component';
import { VerUsuariosComponent } from './componentes/vista/usuarios/usuarios.component';
import { VerEgresosComponent } from './componentes/vista/egresos/egresos.component';
import { VerEgresosUsuarioComponent } from './componentes/vista/egresos-usuario/egresos-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EgresosComponent,
    VerUsuariosComponent,
    VerEgresosComponent,
    VerEgresosUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
