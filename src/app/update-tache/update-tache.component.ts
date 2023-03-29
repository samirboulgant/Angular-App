import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tache } from '../model/Tache';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css'],
})
export class UpdateTacheComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  tache: Tache = new Tache();
  id!: number;

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.apiService
      .getTachebyId(this.id)
      .subscribe((data) => (this.tache = data));
  }
  onSubmit() {
    this.apiService
      .updateTache(this.tache)
      .subscribe(() => this.route.navigate(['/taches']));
  }
}
