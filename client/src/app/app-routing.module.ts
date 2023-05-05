import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PogoAccountsListComponent } from './pogo-accounts-list/pogo-accounts-list.component'
import { AddPogoAccountComponent } from './add-pogo-account/add-pogo-account.component'
import { EditPogoAccountComponent } from './edit-pogo-account/edit-pogo-account.component'

const routes: Routes = [
  { path: '', redirectTo: 'pogo-accounts', pathMatch: 'full' },
  { path: 'pogo-accounts', component: PogoAccountsListComponent },
  { path: 'pogo-accounts/add', component: AddPogoAccountComponent },
  { path: 'pogo-accounts/edit/:id', component: EditPogoAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
