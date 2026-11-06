import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Menu } from '../shared/models/menu';
import { Header } from './header';
import { MenuItem } from './menu';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.scss'],
  imports: [ RouterModule, MatSidenavModule, Header, MenuItem ],
  template: `
    <div class="layout">
        <app-header (menuToggled)="toggle()"></app-header>

        <mat-drawer-container>
          <mat-drawer mode="side" [opened]="opened">
            <menu-item [menu]="menu"></menu-item>
          </mat-drawer>

          <mat-drawer-content [class.margin-left]="opened">
            <router-outlet></router-outlet>
          </mat-drawer-content>
        </mat-drawer-container>
      </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Layout {
  public opened = true;
  public menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
  ];

  public toggle(): void {
    this.opened = !this.opened;
  }
}
