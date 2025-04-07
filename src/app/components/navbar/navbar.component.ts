import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomUserService } from '../../Services/random-user.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent implements OnInit, OnDestroy {
  userData: any = null;
  private timeoutId: any = null;
  private subscription: Subscription | null = null;
  private isDestroyed = false;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.getUserAndScheduleNext();
  }

  getUserAndScheduleNext(): void {
    if (this.isDestroyed) return;

    this.subscription = this.randomUserService.getRandomUser().subscribe({
      next: (data) => {
        this.userData = data?.results?.[0] ?? null;
        this.scheduleNext();
      },
      error: (err) => {
        console.error('Error obteniendo usuario:', err);
        this.scheduleNext();
      }
    });
  }

  scheduleNext(): void {
    this.timeoutId = setTimeout(() => {
      this.getUserAndScheduleNext();
    }, 10000);
  }

  onImageClick(): void {
    this.getUserAndScheduleNext();
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    clearTimeout(this.timeoutId);
    this.subscription?.unsubscribe();
  }
}
