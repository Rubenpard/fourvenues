import { Component, AfterViewInit, ApplicationRef, HostListener, Input, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements AfterViewInit {
  @Input() visibleColumns: string[] = [];


  // Variables para las estadísticas
  numberOfUsers = 1000;
  visits = 1702946;
  duration = 92;
  bounceRate = 58.6;
  pagesPerVisit = 1.81;

  constructor(private appRef: ApplicationRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  filters = [
    { label: 'Today', value: 'today' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Quarter', value: 'quarter' },
    { label: 'Year', value: 'year' }
  ];

  selectedFilter = 'month';
  dateRange = '24 Mar - 23 Apr 2019';

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

  colorScheme = {
    domain: ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#9B51E0', '#DB4437']
  };

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
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.updateChartSizes();
        this.appRef.tick();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateChartSizes();
    }
  }

  private updateChartSizes(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

    if (isMobile) {
      this.lineChartView = [350, 200];
      this.pieChartView = [150, 150];
      this.barChartView = [300, 180];
      this.BounceView = [350, 200];
    } else if (isTablet) {
      this.lineChartView = [700, 300];
      this.pieChartView = [300, 250];
      this.barChartView = [600, 200];
      this.BounceView = [700, 200];
    } else {
      this.lineChartView = [600, 300];
      this.pieChartView = [200, 200];
      this.barChartView = [500, 200];
      this.BounceView = [600, 300];
    }
  }

  onFilterChange(filter: string): void {
    this.selectedFilter = filter;
    console.log(`Filtro seleccionado: ${filter}`);
  }

  isColumnVisible(columnName: string): boolean {
    return Array.isArray(this.visibleColumns) && this.visibleColumns.includes(columnName);
  }
}
