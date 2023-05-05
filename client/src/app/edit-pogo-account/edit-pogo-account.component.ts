import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { PogoAccounts } from '../pogo-accounts'
import { PogoAccountsService } from '../pogo-accounts.service'

@Component({
  selector: 'app-edit-pogo-account',
  template: `
    <h2 class="text-center m-5">Edit a Pogo Account</h2>
    <app-pogo-accounts-form [initialState]="pogoAccount" (formSubmitted)="editPogoAccount($event)" ></app-pogo-accounts-form>" 
  `,
  styles: [
  ]
})
export class EditPogoAccountComponent implements OnInit {
  pogoAccount: BehaviorSubject<PogoAccounts> = new BehaviorSubject({})

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pogoAccountsService: PogoAccountsService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) {
      alert('No id provided')
    }

    this.pogoAccountsService.getPogoAccount(id !).subscribe((pogoAccount) => {
      this.pogoAccount.next(pogoAccount)
    })
  }

  editPogoAccount(pogoAccount: PogoAccounts) {
    this.pogoAccountsService.updatePogoAccount(this.pogoAccount.value._id || '', pogoAccount)
      .subscribe({
        next: () => {
          this.router.navigate(['/pogo-accounts'])
        },
        error: (err) => {
          alert('Failed to update pogo account')
          console.error(err)
        }
      })  
  }

}
