import { Component} from '@angular/core';
import { FormBuilder,} from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class VerUsuariosComponent {

  registros:any;
  constructor(
    private formularioSrv:FormularioService,
    private fb:FormBuilder ) { }

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

  eliminar(id:any){
    console.log(id)
  }
}
