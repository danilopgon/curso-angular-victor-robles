import { Routes } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';
import { CocheComponent } from './coche/coche.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'empleado',
    component: EmpleadoComponent,
  },
  {
    path: 'fruta',
    component: FrutaComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'contacto/:page',
    component: ContactoComponent,
  },
  {
    path: 'coche',
    component: CocheComponent,
  },
  {
    path: 'plantillas',
    component: PlantillasComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
