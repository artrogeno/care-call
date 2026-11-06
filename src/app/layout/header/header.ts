import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule ],
  template: `
    <mat-toolbar class="primary-toolbar">
      <button matIconButton (click)="menuToggled.emit(true)">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="title" routerLink="/">Dashboard</span>
      <span class="spacer"></span>
      <span class="welcome-text">Hello {{ user }}</span>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>person_pin</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="logout()">
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }

      .title {
        cursor: pointer;
      }

      .welcome-text {
        font-size: smaller;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Header {
  @Output()
  public menuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  public user: string = 'Arthur';

  // constructor(private authService: AuthService) { }

  public logout(): void {
    console.log('Logged out');
  }
}
