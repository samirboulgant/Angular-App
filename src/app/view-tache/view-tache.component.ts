import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Tache } from '../model/Tache';

@Component({
  selector: 'app-view-tache',
  templateUrl: './view-tache.component.html',
  styleUrls: ['./view-tache.component.css']
})
export class ViewTacheComponent {
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

}
