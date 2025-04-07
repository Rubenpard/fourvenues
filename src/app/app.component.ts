import { Component } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WebInterfaceComponent } from './components/web-interface/web-interface.component';
import { ThemeService } from './Services/theme.service';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [SidebarComponent, NavbarComponent, DashboardComponent, WebInterfaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'fourvenues';
  constructor(private themeService: ThemeService) {}

  toggleTheme(event: Event): void {
    const isDark = (event.target as HTMLInputElement).checked;
    console.log('Modo oscuro activado:', isDark); // Debug
    document.documentElement.classList.toggle('dark', isDark);
  }

}
