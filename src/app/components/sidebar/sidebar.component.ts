import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
  expanded = true;
  isMobile = false;
  contentVisible = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth < 768; // Cambia 768 según el punto de ruptura que desees
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < 768; // Verifica el tamaño de la pantalla al iniciar
  }

  toggleSidebar() {
    this.expanded = !this.expanded;
  }

  toggleContent() {
    this.contentVisible = !this.contentVisible; // Muestra u oculta el contenido en móvil
  }

  // Puedes definir los items del menú aquí o cargarlo de alguna parte
  menuItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '📅', label: 'Calendar' },
    { icon: '📞', label: 'Contact' }
  ];

}
