import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { PogoAccounts } from '../pogo-accounts'
import { PogoAccountsService } from '../pogo-accounts.service'

@Component({
  selector: 'app-add-pogo-account',
  template: `
    <h2 class="text-center m-5">Add Pogo Account</h2>
    <app-pogo-accounts-form (formSubmitted)="addPogoAccount($event)"></app-pogo-accounts-form>
  `,
  styles: [
  ]
})

export class AddPogoAccountComponent {
  constructor(
    private pogoAccountsService: PogoAccountsService,
    private router: Router
  ) { }

  addPogoAccount(pogoAccount: PogoAccounts) {
    this.pogoAccountsService.createPogoAccount(pogoAccount)
      .subscribe({
        next: () => {
          this.router.navigate(['/pogo-accounts'])
        },
        error: (err) => {
          alert("Failed to create POGO account")
          console.log(err)
        }
      })
  }

}
