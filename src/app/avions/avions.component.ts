import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-avions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './avions.component.html',
  styleUrl: './avions.component.css'
})
export class AvionsComponent implements OnInit {

  avions: Avion[];

  constructor(private avionService: AvionService) {
    this.avions = avionService.listeAvions();
  }

  ngOnInit(): void {
  }

  supprimerAvion(avion: Avion): void {
    const conf = confirm('Etes-vous sûr de vouloir supprimer cet avion ?');
    if (conf) {
      this.avionService.supprimerAvion(avion);
    }
  }
}