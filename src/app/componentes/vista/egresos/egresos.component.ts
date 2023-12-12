import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class VerEgresosComponent {

  registros: any;
  constructor(
    private formularioSrv: FormularioService,
    private fb: FormBuilder) { }

  obtenerEgresos() {
    this.formularioSrv.obtener_egresos().subscribe(
      (response: any) => {
        console.log("Respuesta de obtener_egresoss:", response);
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

