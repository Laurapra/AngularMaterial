import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { usuarios } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
 sexo: any[]=['Masculino', 'Femenino'];

 form: FormGroup;

  constructor(private fb: FormBuilder,
              private _usuarioService: UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar ) {
    this.form= this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  agregarUsuario(){
     const user : usuarios={
        usuario: this.form.value.usuario,
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        sexo: this.form.value.sexo,
     }
     this._usuarioService.agregarUsuario(user);
     this.router.navigate(['/dashboard/usuarios'])

     this._snackBar.open('El usuario fue creado con éxito', '', {
      duration:1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
