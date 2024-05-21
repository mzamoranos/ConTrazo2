import { Routes } from '@angular/router';
import { InicioComponent } from './web/inicio/inicio.component';
import { EventosComponent } from './web/eventos/eventos.component';
import { TalleresComponent } from './web/talleres/talleres.component';

export const routes: Routes = [
    { path: '',component:InicioComponent},
    { path: 'web/eventos', component:EventosComponent},
    { path: 'web/talleres', component:TalleresComponent},
];
