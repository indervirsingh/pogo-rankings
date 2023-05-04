import { Component } from '@angular/core';

@Component({
  selector: 'app-pogo-accounts-form',
  template: `
    <form class="pogo-accounts-form" autocomplete="off" [formGroup]="pogoAccountsForm" (ngSubmit)="submitForm()">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="username" placeholder="username" formControlName="username" required>
        <label for="username">username</label>
      </div>

      <div *ngIf="username.invalid && (username.dirt || username.touched)" class="alert alert-danger">
        <div *ngIf="username.errors?.['required']">
          Username is required.
        </div>
        <div *ngIf="username.errors?.['minlength']">
          Username must be at least 3 characters long.
        </div>
      </div>

      <div class="form-floating mb-3">
        <input class="form-control" type="text" formControlName="team" id="team" placeholder="Team" required>
        <label for="team">Team</label>
      </div>
  `,
  styles: [
  ]
})
export class PogoAccountsFormComponent {

}
