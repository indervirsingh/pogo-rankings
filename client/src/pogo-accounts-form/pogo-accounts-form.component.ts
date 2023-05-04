import { Component } from '@angular/core';

@Component({
  selector: 'app-pogo-accounts-form',
  template: `
    <form class="pogo-accounts-form" autocomplete="off" [formGroup]="pogoAccountsForm" (ngSubmit)="submitForm()">

      <!-- Username section -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="username" placeholder="username" formControlName="username" required>
          <label for="username">Username</label>
        </div>

        <!-- Error handling for username attribute -->
        <div *ngIf="username.invalid && (username.dirty || username.touched)" class="alert alert-danger">

          <div *ngIf="username.errors?.['required']">
            Username is required.
          </div>
          <div *ngIf="username.errors?.['minlength']">
            Username must be at least 3 characters long.
          </div>

        </div>

      <!-- Email section -->
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="Email" formControlName="email" required>
          <label for="email">Email</label>
        </div>

        <!-- Error handling for email attribute -->
        <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">

          <div *ngIf="email.errors?.['required']">
            Email is required.
          </div>  
          <div *ngIf="email.errors?.['email']">
            Email must be a valid email address.
          </div>
        </div>

      <!-- Team section -->
        <div class="form-floating mb-3">
          <input class="form-control" type="text" formControlName="team" id="team" placeholder="Team" required>
          <label for="team">Team</label>
        </div>

        <!-- Error handling for team  -->
        <div *ngIf="team.invalid && (team.dirty || team.touched)" class="alert alert-danger">

          <div *ngIf="team.errors?.['required']">
            Team is required.
          </div>
          <div *ngIf="team.errors?.['required']">
            Team must be one of the three: Instinct, Mystic, Valor.
          </div>

        </div>

      <!-- Level section -->

  `,
  styles: [
  ]
})
export class PogoAccountsFormComponent {

}
