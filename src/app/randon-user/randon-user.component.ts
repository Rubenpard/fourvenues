import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomUserService } from '../Services/random-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-randon-user',
  imports: [CommonModule],
  templateUrl: './randon-user.component.html',
  styleUrl: './randon-user.component.sass'
})
export class RandonUserComponent {
  userData: any = null; // Aseguramos que la propiedad userData esté inicializada como null

  constructor(private randomUserService: RandomUserService) {}


  ngOnInit(): void {
    this.randomUserService.getRandomUser().subscribe({
      next: (data: any) => { // Declaro que 'data' es de tipo 'any'
        this.userData = data.results[0]; // Asignamos el primer usuario del resultado
      },
      error: (error: any) => { // Declaro que 'error' es de tipo 'any'
        console.error('Error fetching user data:', error);
      }
    });
  }

}
