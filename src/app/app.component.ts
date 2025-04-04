import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WebInterfaceComponent } from './components/web-interface/web-interface.component';


@Component({
  selector: 'app-root',
  imports: [SidebarComponent, NavbarComponent, DashboardComponent, WebInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'fourvenues';

}
