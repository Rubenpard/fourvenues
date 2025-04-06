import { Component,OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { RandonUserComponent } from "../../randon-user/randon-user.component";


@Component({
  selector: 'web-interface',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './web-interface.component.html',
  styleUrl: './web-interface.component.sass'
})
export class WebInterfaceComponent  {

  menuItems = [
    { label: 'Notification', count: 4, hasNotifications: true },
    { label: 'Friends',  count: 3, hasNotifications: true },
    { label: 'Messages', count: 1, hasNotifications: false },
    { label: 'Settings', count: 0, hasNotifications: false },
    { label: 'Top Charts',  count: 0, hasNotifications: false }
  ];

  menuContacts = [
    { name: 'Steaven McGuire', picture: 'https://rubenalemartinez.es/assets/rubenmartinez.jpg', connected: true},
    { name: 'MableDrake', picture: 'https://avatars.githubusercontent.com/u/1561955?v=4', connected: true},
    { name: 'RebecaHerrera', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZO9noFjsvZR4icZERgDb9pBLIZ6ZspbLXWw&s', connected: true},
    { name: 'Dani Collier', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: false},
    { name: 'Notification', picture: 'https://m.media-amazon.com/images/S/pv-target-images/c1818c4c4de1a2d35550f21448aa0a2b233fe9d107cc353665efa25891f1988b._SX1080_FMjpg_.jpg', connected: false},
    { name: 'Notification', picture: 'https://www.shutterstock.com/image-photo/goal-emotional-male-celebrating-victory-600nw-2217623315.jpg', connected: false},
    { name: 'Notification', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66u28GmtwzlhyYSoViq3P62MhfYTYLJ8bTw&s', connected: false},

  ];

  // Método para limpiar notificaciones de un ítem
  clearNotifications(index: number) {
    this.menuItems[index].count = 0;
    this.menuItems[index].hasNotifications = false;
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jul 14', 'Sep 14', 'Nov 14', 'Jan 14', 'Mar 14', 'May 21'],
    datasets: [
      {
        data: [5, 15, 10, 20, 25, 30],
        label: 'Bounce Rate',
        fill: true,
        tension: 0.4,
        borderColor: '#10B981', // Verde
        backgroundColor: 'rgba(16, 185, 129, 0.2)', // Verde translúcido
        pointBackgroundColor: '#10B981',
        pointBorderColor: '#10B981',
        pointHoverBackgroundColor: '#10B981',
        pointHoverBorderColor: '#10B981',
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#E5E7EB', // Gris claro
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  public lineChartLegend = true;

}
