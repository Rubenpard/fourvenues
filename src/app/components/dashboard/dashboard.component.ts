import { Component, AfterViewInit, ApplicationRef, HostListener } from '@angular/core';
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

    // Variables para los datos de las estadísticas
    numberOfUsers = 1000;
    visits = 1702946;
    duration = 92;
    bounceRate = 58.6;
    pagesPerVisit = 1.81;

  constructor(private appRef: ApplicationRef) {}

  filters = [
    { label: 'Today', value: 'today' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Quarter', value: 'quarter' },
    { label: 'Year', value: 'year' }
  ];

  dateRange = '24 Mar - 23 Apr 2019';


   // Datos del gráfico
  public lineChartData = [
    {
      name: 'Bounce Rate',
      series: [
        { name: 'Jul 14', value: 5 },
        { name: 'Sep 14', value: 15 },
        { name: 'Nov 14', value: 10 },
        { name: 'Jan 14', value: 20 },
        { name: 'Mar 14', value: 25 },
        { name: 'May 21', value: 30 },
      ],
    },
  ];


  // Esquema de colores reutilizable
  colorScheme = {
    domain: ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#9B51E0', '#DB4437']
  };

  // Tamaños de los gráficos
  lineChartView: [number, number] = [700, 300];
  pieChartView: [number, number] = [300, 300];
  barChartView: [number, number] = [700, 300];
  BounceView: [number, number] = [600, 300];

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
    this.updateChartSizes(); // Ajustar el tamaño al cargar
    setTimeout(() => {
      this.appRef.tick(); // Forzar la detección de cambios después de que el gráfico se haya renderizado
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateChartSizes(); // Ajustar el tamaño al cambiar el tamaño de la ventana
  }

  private updateChartSizes(): void {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

    if (isMobile) {
      this.lineChartView = [300, 100];
      this.pieChartView = [200, 200];
      this.barChartView = [200, 180];
      this.BounceView = [300, 100];
    } else if (isTablet) {
      this.lineChartView = [600, 300];
      this.pieChartView = [250, 250];
      this.barChartView = [500, 200];
      this.BounceView = [300, 100];
    } else {
      this.lineChartView = [600, 300];
      this.pieChartView = [200, 200];
      this.barChartView = [500, 200];
      this.BounceView = [100, 300];
    }
  }
}
