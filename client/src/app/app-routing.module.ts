import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PogoAccountsListComponent } from './pogo-accounts-list/pogo-accounts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pogo-accounts', pathMatch: 'full' },
  { path: 'pogo-accounts', component: PogoAccountsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
