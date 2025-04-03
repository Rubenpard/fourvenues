import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass'
})
export class SidebarComponent {
  expanded: boolean = true; // Estado para el sidebar

  // Función para alternar el estado del sidebar
  toggleSidebar() {
    this.expanded = !this.expanded;
  }

  // Puedes definir los items del menú aquí o cargarlo de alguna parte
  menuItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '📅', label: 'Calendar' },
    { icon: '📞', label: 'Contact' }
  ];
}
