import { Component, AfterViewInit, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements AfterViewInit {

  constructor(private appRef: ApplicationRef) {}

  // Variables para los datos de las estadísticas
  numberOfUsers = 1000;
  visits = 1702946;
  duration = 92;
  bounceRate = 58.6;
  pagesPerVisit = 1.81;

  // Esquema de colores reutilizable
  colorScheme = {
    domain: ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#9B51E0', '#DB4437']
  };
  view: [number, number] = [700, 300]; // Tamaño del gráfico

  data = [
    {
      name: 'Sessions',
      series: [
        { name: 'Jul 14', value: 2 },
        { name: 'Sep 14', value: 6 },
        { name: 'Nov 14', value: 10 },
        { name: 'Jan 14', value: 15 },
        { name: 'Mar 14', value: 25 },
        { name: 'May 21', value: 20 },
      ]
    }
  ];

  trafficData = [
    { name: 'Search', value: 63.09 },
    { name: 'Direct', value: 8.58 },
    { name: 'Display', value: 15.12 },
    { name: 'Email', value: 3.10 },
    { name: 'Paid Search', value: 3.10 },
    { name: 'Referral', value: 3.20 }
  ];

  conversionData = [
    { name: 'Organic', value: 13 },
    { name: 'Referral', value: 11 },
    { name: 'Paid Search', value: 9 },
    { name: 'Email', value: 7 }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.appRef.tick(); // Forzar la detección de cambios después de que el gráfico se haya renderizado
    }, 0);
  }
}
