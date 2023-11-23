import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [  
  { path: '',  component: HomeComponent},
  { path: 'about',  component: AboutComponent},
  { path: 'services',  component: ServiciosComponent},
  { path: 'login',  component: IniciarSesionComponent},
  { path: 'register',  component: RegistrarComponent},
  { path: 'userpage', component: UserPageComponent},
  { path: 'adminpage', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
