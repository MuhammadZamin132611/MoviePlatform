import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { isPlatformBrowser } from '@angular/common';

@Component({
  imports: [MaterialModule],
  selector: 'app-no-internet',
  styleUrl: './no-internet.css',
  templateUrl: './no-internet.html',
})
export class NoInternet implements OnInit, OnDestroy{

  private platformId = inject(PLATFORM_ID);


  // Tracks live connection status
  isOnline = signal<boolean>(true);
  isChecking = signal<boolean>(false);

  private onlineHandler = () => this.isOnline.set(true);
  private offlineHandler = () => this.isOnline.set(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isOnline.set(navigator.onLine);
      window.addEventListener('online', this.onlineHandler);
      window.addEventListener('offline', this.offlineHandler);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('online', this.onlineHandler);
      window.removeEventListener('offline', this.offlineHandler);
    }
  }

  retryConnection(): void {
    this.isChecking.set(true);
    setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.isOnline.set(navigator.onLine);
      }
      this.isChecking.set(false);
    }, 600);
  }
}
