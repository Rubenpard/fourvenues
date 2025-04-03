import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  userPicture: string = 'https://rubenalemartinez.es/assets/rubenmartinez.jpg';
  userName: string = 'Ruben Martinez';

}
