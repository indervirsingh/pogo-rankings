import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PogoAccountsListComponent } from './pogo-accounts-list/pogo-accounts-list.component';
import { PogoAccountsFormComponent } from '../pogo-accounts-form/pogo-accounts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PogoAccountsListComponent,
    PogoAccountsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
