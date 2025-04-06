import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomUserService } from '../../Services/random-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent implements OnInit, OnDestroy {
  userData: any = null;
  private intervalId: any;
  private isLoading: boolean = false;
  private hasError: boolean = false;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    console.log('Componente cargado, obteniendo primer usuario...');
    this.fetchRandomUser(); // Primer usuario al iniciar
    // Desactivar la actualización automática para pruebas
    // this.startInterval();   // Comienza la ejecución automática cada 10 segundos
  }

  // Función para obtener el usuario aleatorio
  fetchRandomUser(): void {
    if (this.isLoading) {
      console.log('Ya se está cargando un usuario, espera...');
      return; // Evitar peticiones si ya está cargando
    }

    console.log('Realizando petición para obtener un usuario...');
    this.isLoading = true;  // Indicamos que está cargando
    this.hasError = false;  // Reseteamos el error

    this.randomUserService.getRandomUser().subscribe({
      next: (data: any) => {
        this.isLoading = false;
        if (data.results && data.results.length > 0) {
          this.userData = data.results[0];
          console.log('Usuario actualizado:', this.userData);
        } else {
          console.error('No se encontraron usuarios.');
          this.hasError = true;
        }
      },
      error: (error: any) => {
        this.isLoading = false;
        this.hasError = true;
        console.error('Error fetching user data:', error);
      }
    });
  }

  // Se ejecuta cuando se hace clic en la imagen
  onImageClick(): void {
    this.fetchRandomUser();
    // this.startInterval();     // Reiniciar intervalo (desactivado para pruebas)
  }

  // Limpieza al destruir componente
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiar intervalo al destruir el componente
    }
  }
}
