import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { PogoAccounts } from '../pogo-accounts';

@Component({
  selector: 'app-pogo-accounts-form',
  template: `
    <form class="pogo-accounts-form" autocomplete="off" [formGroup]="pogoAccountsForm" (ngSubmit)="submitForm()">

      <!-- Username section -->
      <section class="username-section">
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
      </section>

      <!-- Email section -->
      <section class="email-section">
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
      </section>

      <!-- Team section -->
      <section class="team-section">
        <div class="form-floating mb-3">

          <div class="form-check">
            <input class="form-check-input" type="radio" formControlName="team" id="team-instinct" value="instinct" required>
            <label class="form-check-label" for="team-instinct">Instinct</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" formControlName="team" id="team-mystic" value="mystic" required>
            <label class="form-check-label" for="team-mystic">Mystic</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" formControlName="team" id="team-valor"Valor="valor"Valor>
            <label class="form-check-label" for="team-valor">Valor</label>
          </div>

        </div>
      </section>
      <!-- End Sections -->
      
    </form>
  `,
  styles: [
    `.pogo-accounts-form {
      max-width: 560px;
      margin-left auto;
      margin-right: auto;
    }`
  ]
})
export class PogoAccountsFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<PogoAccounts> = new BehaviorSubject<PogoAccounts>({})

  @Output()
  formValuesChanged = new EventEmitter<PogoAccounts>()

  @Output()
  formSubmitted = new EventEmitter<PogoAccounts>()

  pogoAccountsForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) { }

  get username() { return this.pogoAccountsForm.get('username') }
  get email() { return this.pogoAccountsForm.get('email') }
  get team() { return this.pogoAccountsForm.get('team') }

  ngOnInit() {
    this.initialState.subscribe(pogoAccount => {
      this.pogoAccountsForm = this.fb.group({
        username: [pogoAccount.username, [ Validators.required, Validators.minLength(3) ] ],
        email: [pogoAccount.email, [ Validators.required, Validators.email ] ],
        team: [pogoAccount.team, [ Validators.required ] ]
      })
    })

    this.pogoAccountsForm.valueChanges.subscribe( (val) => { this.formValuesChanged.emit(val) } )
  }

  submitForm() {
    this.formSubmitted.emit(this.pogoAccountsForm.value)
  }

}
