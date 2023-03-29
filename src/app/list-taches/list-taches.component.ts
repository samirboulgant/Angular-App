import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tache } from '../model/Tache';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css'],
})
export class ListTachesComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  taches: Tache[] = [];
  search!: string;

  ngOnInit(): void {
    this.getTaches();
  }
  getTaches() {
    this.apiService.getTaches().subscribe((data) => (this.taches = data));
  }
  deleteTache(id: number) {
    this.apiService.delete(id).subscribe(() => this.getTaches());
  }

  updateTache(id: number) {
    this.router.navigate(['updateTache', id]);
  }
  viewTache(id: number) {
    this.router.navigate(['viewTache', id]);
  }
  searchByDescreption(descreption: string) {
    if (this.search === '') {
      this.getTaches();
    } else {
      console.log(this.search);
      this.apiService
        .searchByDescription(descreption)
        .subscribe((data) => (this.taches = data));
    }
  }
}
