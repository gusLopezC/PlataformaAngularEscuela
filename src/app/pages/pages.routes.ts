import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/services.index';
import { AdminGuard } from '../services/services.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { GruposComponent } from './grupos/grupos.component';
import { ExamenComponent } from './examenes/examen.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { BusquedaComponent } from './busqueda/busqueda.component';




const pagesRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
    { path: 'progress', component: ProgressComponent, data: { titulo: 'Progreso' } },
    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
    { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
    { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
    { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Busqueda' } },

    // Contenido
    { path: 'usuarios', component: UsuariosComponent, canActivate: [AdminGuard], data: { titulo: 'Mantenimiento Usuarios' } },
    { path: 'grupos', component: GruposComponent, data: { titulo: 'Mantenimiento Grupos' } },
    { path: 'examenes', component: ExamenesComponent, data: { titulo: 'Mantenimiento Examenes' } },
    { path: 'examen/:id', component: ExamenComponent, data: { titulo: 'Actualizar Examen' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
