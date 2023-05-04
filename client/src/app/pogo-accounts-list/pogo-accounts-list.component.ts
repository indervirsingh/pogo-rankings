import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { PogoAccounts } from '../../pogo-accounts'
import { PogoAccountsService } from '../../pogo-accounts.service'

// Need to fix module/folder import

@Component({
  selector: 'app-pogo-accounts-list',
  template: `
    <h2 class="text-center m-5">Accounts List</h2>
    
    <table class="table table-striped table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Team</th>
          <th>Country</th>
          <th>Birthday</th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let pogoAccount of pogoAccounts$ | async">
          <td>{{ pogoAccount.username }}</td>
          <td>{{ pogoAccount.email }}</td>
          <td>{{ pogoAccount.team }}</td>
          <td>{{ pogoAccount.country }}</td>
          <td>{{ pogoAccount.birthday }}</td>
              <button class="btn btn-primary me-1" [routerLink]="['edit/', pogoAccount._id]">Edit</button>
              <button class="btn btn-danger" (click)="deletePogoAccount(pogoAccount._id || '')">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-primary" [routerLink]="['new']">Add a New Account</button>

  `,
  styles: [
  ]
})

export class PogoAccountsListComponent implements OnInit {
  public pogoAccounts$: Observable<PogoAccounts[]> = new Observable()

  constructor(private pogoAccountsService: PogoAccountsService) {  }

  ngOnInit(): void {
    this.fetchPogoAccounts()
  }

  deletePogoAccount(id: string) {
    this.pogoAccountsService.deletePogoAccount(id).subscribe({
      next: () => this.fetchPogoAccounts()
    })
  }

  private fetchPogoAccounts(): void {
    this.pogoAccounts$ = this.pogoAccountsService.getPogoAccounts()
  }

}
