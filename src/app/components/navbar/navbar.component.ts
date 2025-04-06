import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomUserService } from '../../Services/random-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent implements OnInit {
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
