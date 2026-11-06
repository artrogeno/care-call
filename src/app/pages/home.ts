import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SubHeader } from '../layout/sub-header';

@Component({
  template: `
    <sub-header icon="home">
      <h2>Home</h2>

      <button
        routerLink="/sales"
        mat-flat-button
        color="primary"
        class="action">
        <mat-icon class="mr-2">add</mat-icon>
        <span>New sale</span>
      </button>
    </sub-header>

    <div style="padding: 0 20px">
      Hello from Home
    </div>
  `,
  imports: [RouterModule, MatIconModule, MatButtonModule, SubHeader ]
})
export class Home {}
