import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario.service';
//import { FormularioService } from '../../servicios/formulario.service'
@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  formulario: any;
  registro: any[] = [];
  registro_enviar = {
    descripcion: String,
    precio: Number,
    id_usuario: Object,
  }
  registros: any;
  constructor(
    private formularioSrv: FormularioService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      id_usuario: ['', [Validators.required]]
    });
  }

  //obtener los las validaciones
  get formularioReactivo() {
    return this.formulario.controls;
  }

  botonEnviar() {
    this.registro_enviar.descripcion = this.formularioReactivo.descripcion.value
    this.registro_enviar.precio = this.formularioReactivo.precio.value
    this.registro_enviar.id_usuario = this.formularioReactivo.id_usuario.value

    this.formularioSrv.crear_egreso(this.registro_enviar).subscribe(
      (response: any) => {
        this.registro = response.registro;
        console.log("Los datos recibidos son")
        console.log(this.registro_enviar)
      }, error => {
        console.log(error)
      }
    )
    //console.log(this.formularioReactivo);
  }

  obtenerEgresos() {
    this.formularioSrv.obtener_egresos().subscribe(
      (response: any) => {
        console.log("Respuesta de obtener_egresos:", response);
        this.registros = response.egresos;
        console.log("Egresos obtenidos:", this.registros);
      },
      (error) => {
        console.log("Error al obtener egresos:", error);
      }
    );
  }

  eliminar(id: any) {
    console.log(id)
  }
}