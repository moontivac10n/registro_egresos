import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend;
  constructor(
    private http:HttpClient
  ) { }

  crear_registro(datos:any){
    return this.http.post(`${this.url_backend+'/usuario/crear-usuario' }`,datos)
  }
  obtener_registros(){
    return this.http.get(`${this.url_backend+'/usuario/obtener-usuarios' }`)

  }

  crear_egreso(datos:any){
    return this.http.post(`${this.url_backend+'/egreso/crear-egreso' }`,datos)
  }

  obtener_egresos(){
    return this.http.get(`${this.url_backend+'/egreso/obtener-egresos' }`)

  }

  obtener_egresos_usuario(id: string) {
    return this.http.get(`${this.url_backend}/egreso/obtener-egresos-usuario/${id}`);
  }
}
