import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';{}

@Component({
  selector: 'web-interface',
  imports: [CommonModule],
  templateUrl: './web-interface.component.html',
  styleUrl: './web-interface.component.sass'
})
export class WebInterfaceComponent {

  menuItems = [
    { label: 'Notification', count: 4, hasNotifications: true },
    { label: 'Friends',  count: 0, hasNotifications: false },
    { label: 'Messages', count: 1, hasNotifications: true },
    { label: 'Settings', count: 0, hasNotifications: false },
    { label: 'Top Charts',  count: 0, hasNotifications: false }
  ];

  menuContacts = [
    { name: 'Steaven McGuire', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: true},
    { name: 'MableDrake', picture: 'https://avatars.githubusercontent.com/u/1561955?v=4', connected: true},
    { name: 'RebecaHerrera', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: true},
    { name: 'Dani Collier', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: false},
    { name: 'Notification', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: false},

    { name: 'Notification', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: false},
    { name: 'Notification', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: false},

  ];

  // Método para limpiar notificaciones de un ítem
  clearNotifications(index: number) {
    this.menuItems[index].count = 0;
    this.menuItems[index].hasNotifications = false;
  }

}
