import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTacheComponent } from './create-tache/create-tache.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { ViewTacheComponent } from './view-tache/view-tache.component';

const routes: Routes = [
  { path: 'taches', component: ListTachesComponent },
  { path: 'create-tache', component: CreateTacheComponent },
  { path: 'updateTache/:id', component: UpdateTacheComponent },
  { path: 'viewTache/:id', component: ViewTacheComponent },
  {
    path: '',
    redirectTo: 'taches',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
