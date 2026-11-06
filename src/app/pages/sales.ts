import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SubHeader } from '../layout/sub-header';

@Component({
  template: `
    <sub-header icon="monetization_on">
      <h2>Sales</h2>

      <button routerLink="/home" mat-flat-button color="primary" class="action">
        <mat-icon class="mr-2">home</mat-icon>
        <span>Go home</span>
      </button>
    </sub-header>

    <div style="padding: 0 20px">
      Hello from Sales
    </div>
  `,
  imports: [RouterModule, MatIconModule, MatButtonModule, SubHeader ]
})
export class Sales {}
