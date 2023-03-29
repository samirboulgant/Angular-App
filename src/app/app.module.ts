import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { CreateTacheComponent } from './create-tache/create-tache.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { ViewTacheComponent } from './view-tache/view-tache.component';

@NgModule({
  declarations: [AppComponent, ListTachesComponent, CreateTacheComponent, UpdateTacheComponent, ViewTacheComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
