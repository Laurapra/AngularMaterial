import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  //pongo en practica la carga perezosa que no es más que mostrarle al usuario unos pocos componentes pero si ingresa a DASHBOARD se le cargaran todos
  {path: 'dashboard', loadChildren:() => import('./components/dashboard/dashboard.module').then( x => x.DashboardModule )},
  //con esto logro que si pongo una ruta que no existe me redireccione al login
  {path:'**',redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
