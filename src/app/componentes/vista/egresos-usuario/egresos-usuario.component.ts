import { Component } from '@angular/core';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-egresos-usuario',
  templateUrl: './egresos-usuario.component.html',
  styleUrls: ['./egresos-usuario.component.css']
})
export class VerEgresosUsuarioComponent {
  registros: any;
  userId: string = '';

  constructor(private formularioSrv: FormularioService) { }

  obtenerEgresosUsuario() {
    if (this.userId) {
      this.formularioSrv.obtener_egresos_usuario(this.userId).subscribe(
        (response: any) => {
          this.registros = response.egresos_usuario;
          console.log("Egresos obtenidos del usuario:", this.registros);
        },
        (error) => {
          console.log("Error al obtener egresos:", error);
        }
      );
    } else {
      console.log("ID de usuario no válido");
    }
  }

  eliminar(id: any) {
    console.log(id);
  }
}