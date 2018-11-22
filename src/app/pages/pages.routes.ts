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
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { RecuerdacoloresComponent } from './recuerdacolores/recuerdacolores.component';
import { GatoversusComponent } from './gatoversus/gatoversus.component';
import { InformesComponent } from './informes/informes.component';
import { FormularioactividadComponent } from './formularioactividad/formularioactividad.component';
import { FormulariopreguntasComponent } from './formulariopreguntas/formulariopreguntas.component';
import { PrevisualizaactividadComponent } from './previsualizaactividad/previsualizaactividad.component';
import { CompartiractividadComponent } from './compartiractividad/compartiractividad.component';
import { AgendaComponent } from './agenda/agenda.component';




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
    { path: 'agenda', component: AgendaComponent, data: { titulo: 'Agenda' } },
    // Actividades
    { path: 'misactividades', component: MisactividadesComponent, data: { titulo: 'Mis actividades' } },
    { path: 'formularioactividad', component: FormularioactividadComponent, data: { titulo: 'Crea tu actividad' } },
    { path: 'formulariopreguntas', component: FormulariopreguntasComponent, data: { titulo: 'Crea tus preguntas' } },
    { path: 'previsualizaactividad', component: PrevisualizaactividadComponent, data: { titulo: 'Previsualza tu actividades' } },
    { path: 'compartiractividad', component: CompartiractividadComponent, data: { titulo: 'Comparte tu actividades' } },


    // Informes
    { path: 'informes', component: InformesComponent, data: { titulo: 'Informes' } },
    { path: 'informesstudent', component: InformesComponent, data: { titulo: 'Informes Student' } },

    // Juegos
    { path: 'gato', component: GatoComponent, data: { titulo: 'Gato' } },
    { path: 'gatoversus', component: GatoversusComponent, data: { titulo: 'Gato Versus' } },
    { path: 'snake', component: SnakeComponent, data: { titulo: 'Snake' } },
    { path: 'recuerdacolores', component: RecuerdacoloresComponent, data: { titulo: 'Recuerdacolores' } },
    { path: 'ahorcado', component: AhorcadoComponent, data: { titulo: 'Ahorcado' } },

    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
