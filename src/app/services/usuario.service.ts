import { Injectable } from '@angular/core';
import { usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: usuarios[] = [
    {usuario: 'jperez', nombre: 'ElySaul', apellido: 'Vasquez', sexo: 'Masculino'},
    {usuario: 'bjimenez', nombre: 'Brenda', apellido: 'Jimenez', sexo: 'Femenino'},
    {usuario: 'acordero', nombre: 'Ana', apellido: 'Cordero', sexo: 'Femenino'},
    {usuario: 'baby_09', nombre: 'Ricardo', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'la_sensacion_del_bloque', nombre: 'Henry', apellido: 'Rodriguez', sexo: 'Masculino'},
    {usuario: 'iangulo', nombre: 'Isabel', apellido: 'Angulo', sexo: 'Femenino'},
  ];




  constructor() {}
  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }
  agregarUsuario(usuario: usuarios){
    this.listUsuarios.unshift(usuario);
  }

}
