import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Menu } from '../../shared/models/menu';

@Component({
  selector: 'menu-item',
  styleUrls: ['./menu-item.scss'],
  imports: [RouterModule, MatExpansionModule, MatListModule, MatIconModule],
  template: `
    <mat-list class="menu-list">
      @for (item of menu; track $index) {
        <!-- If the item doesn't have children show it as list item-->
        @if (item.subMenu === undefined) {
          @if (item.title) {
            <mat-list-item
              routerLinkActive="active"
              [routerLink]="item.link"
              [routerLinkActiveOptions]="{ exact: true }">
              <mat-icon [style.color]="item.color" matListItemIcon>
                {{ item.icon }}
              </mat-icon>
              <div matListItemTitle>{{ item.title }}</div>
            </mat-list-item>
          }
        }
        <!-- If the item has subMenu show it as accordion-->
        @if (!!item.subMenu && item.subMenu?.length > 0) {
          <mat-expansion-panel class="expansion-panel" [expanded]="item.expanded">
            <mat-expansion-panel-header>
              <mat-panel-title class="d-flex align-items-center">
                <mat-icon [style.color]="item.color" matListItemIcon>
                  {{ item.icon }}
                </mat-icon>
                <span matListItemLine class="list-item">{{ item.title }}</span>
              </mat-panel-title>
            </mat-expansion-panel-header>
            <menu-item [menu]="item.subMenu"></menu-item>
          </mat-expansion-panel>
        }
      }
    </mat-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItem {
  @Input() public menu: Menu = [];
}
