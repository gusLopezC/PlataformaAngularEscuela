import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LoginGuardGuard } from '../services/services.index';
import { AdminGuard } from '../services/services.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GruposComponent } from './grupos/grupos.component';
import { ExamenComponent } from './examenes/examen.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GatoComponent } from './gato/gato.component';
import { SnakeComponent } from './snake/snake.component';
import { MisactividadesComponent } from './misactividades/misactividades.component';
import { CreaactividadesComponent } from './creaactividades/creaactividades.component';




const pagesRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
    { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Busqueda' } },

    // Contenido
    { path: 'usuarios', component: UsuariosComponent, canActivate: [AdminGuard], data: { titulo: 'Mantenimiento Usuarios' } },
    { path: 'grupos', component: GruposComponent, data: { titulo: 'Mantenimiento Grupos' } },
    { path: 'examenes', component: ExamenesComponent, data: { titulo: 'Mantenimiento Examenes' } },
    { path: 'examen/:id', component: ExamenComponent, data: { titulo: 'Actualizar Examen' } },

    // Actividades
    { path: 'misactividades', component: MisactividadesComponent, data: { titulo: 'misactividades' } },
    { path: 'creaactividades', component: CreaactividadesComponent, data: { titulo: 'creaactividades' } },


    // Informes
    { path: 'informes', component: GatoComponent, data: { titulo: 'Informes' } },
    { path: 'informesstudent', component: GatoComponent, data: { titulo: 'Informes Student' } },

    // Juegos
    { path: 'gato', component: GatoComponent, data: { titulo: 'Gato' } },
    { path: 'gatoversus', component: SnakeComponent, data: { titulo: 'Gato Versus' } },
    { path: 'snake', component: SnakeComponent, data: { titulo: 'Snake' } },
    { path: 'recuerdacolores', component: SnakeComponent, data: { titulo: 'Recuerdacolores' } },
    { path: 'ahorcado', component: SnakeComponent, data: { titulo: 'Ahorcado' } },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
