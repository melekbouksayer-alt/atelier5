import { Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParNomPipeComponent } from './recherche-par-nom-pipe/recherche-par-nom-pipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { avionGuard } from './avion.guard';

export const routes: Routes = [
  { path: 'avions', component: AvionsComponent },
  {path: "add-avion", component : AddAvionComponent, canActivate:[avionGuard]}, 
  { path: 'updateAvion/:id', component: UpdateAvionComponent },
  { path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'rechercheParNomPipe', component: RechercheParNomPipeComponent },
  {path:  'login', component: LoginComponent} ,
  {path:  'app-forbidden', component: ForbiddenComponent}, 
  { path: '', redirectTo: 'avions', pathMatch: 'full' },
];