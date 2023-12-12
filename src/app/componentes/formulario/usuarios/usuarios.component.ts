import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario.service';
//import { FormularioService } from '../../servicios/formulario.service'
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  //tipado
  formulario: any;
  registro: any[] = [];
  registro_enviar = {
    nombre: String,
    apellido: String,
    rut: { type: String, default: null },
    correo: String,
    password: String
  }
  registros: any;
  constructor(
    private formularioSrv: FormularioService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  //obtener los las validaciones
  get formularioReactivo() {
    return this.formulario.controls;
  }

  botonEnviar() {
    this.registro_enviar.nombre = this.formularioReactivo.nombre.value
    this.registro_enviar.apellido = this.formularioReactivo.apellido.value
    this.registro_enviar.rut = this.formularioReactivo.rut.value
    this.registro_enviar.correo = this.formularioReactivo.correo.value
    this.registro_enviar.password = this.formularioReactivo.password.value

    this.formularioSrv.crear_registro(this.registro_enviar).subscribe(
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

  obtenerRegistro() {
    this.formularioSrv.obtener_registros().subscribe(
      (response: any) => {
        console.log("Respuesta de obtener_registros:", response);
        this.registros = response.usuarios;
        console.log("Registros obtenidos:", this.registros);
      },
      (error) => {
        console.log("Error al obtener registros:", error);
      }
    );
  }

  eliminar(id: any) {
    console.log(id)
  }
}