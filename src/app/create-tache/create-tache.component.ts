import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tache } from '../model/Tache';

@Component({
  selector: 'app-create-tache',
  templateUrl: './create-tache.component.html',
  styleUrls: ['./create-tache.component.css'],
})
export class CreateTacheComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  tache: Tache = new Tache();
  ngOnInit(): void {}

  onSubmit() {
    this.apiService
      .addTache(this.tache)
      .subscribe(() => this.router.navigate(['/taches']));
  }
}
