import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.routes';
import { ChartsModule } from 'ng2-charts';



// Temporal
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { GruposComponent } from './grupos/grupos.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ExamenComponent } from './examenes/examen.component';
import { SnakeComponent } from './snake/snake.component';
import { GatoComponent } from './gato/gato.component';
import { GatoversusComponent } from './gatoversus/gatoversus.component';
import { RecuerdacoloresComponent } from './recuerdacolores/recuerdacolores.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { InformesComponent } from './informes/informes.component';
import { InformesstudentComponent } from './informesstudent/informesstudent.component';
import { MisactividadesComponent } from './misactividades/misactividades.component';
import { FormularioactividadComponent } from './formularioactividad/formularioactividad.component';
import { FormulariopreguntasComponent } from './formulariopreguntas/formulariopreguntas.component';
import { PrevisualizaactividadComponent } from './previsualizaactividad/previsualizaactividad.component';
import { CompartiractividadComponent } from './compartiractividad/compartiractividad.component';
import { AgendaComponent } from './agenda/agenda.component';
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  declarations: [
   // PagesComponent,
    DashboardComponent,
    AccountSettingsComponent,
    ProfileComponent,
    UsuariosComponent,
   // ModalUploadComponent,
    GruposComponent,
    ExamenesComponent,
    ExamenComponent,
    BusquedaComponent,
    SnakeComponent,
    GatoComponent,
    GatoversusComponent,
    RecuerdacoloresComponent,
    AhorcadoComponent,
    InformesComponent,
    InformesstudentComponent,
    MisactividadesComponent,
    FormularioactividadComponent,
    FormulariopreguntasComponent,
    PrevisualizaactividadComponent,
    CompartiractividadComponent,
    AgendaComponent
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule,
    FullCalendarModule
  ]
})
export class PagesModule { }
