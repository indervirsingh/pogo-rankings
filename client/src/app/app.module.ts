import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PogoAccountsListComponent } from './pogo-accounts-list/pogo-accounts-list.component';
import { PogoAccountsFormComponent } from '../pogo-accounts-form/pogo-accounts-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPogoAccountComponent } from '../add-pogo-account/add-pogo-account.component';

@NgModule({
  declarations: [
    AppComponent,
    PogoAccountsListComponent,
    PogoAccountsFormComponent,
    AddPogoAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
