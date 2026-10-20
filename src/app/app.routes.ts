import { Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParNomPipeComponent } from './recherche-par-nom-pipe/recherche-par-nom-pipe.component';

export const routes: Routes = [
  { path: 'avions', component: AvionsComponent },
  { path: 'add-avion', component: AddAvionComponent },
  { path: 'updateAvion/:id', component: UpdateAvionComponent },
  { path: '', redirectTo: 'avions', pathMatch: 'full' },
  { path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'rechercheParNomPipe', component: RechercheParNomPipeComponent },
];