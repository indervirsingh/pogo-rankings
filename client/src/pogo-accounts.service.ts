import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, Subject, tap } from 'rxjs'
import { PogoAccounts } from './pogo-accounts'

@Injectable({
  providedIn: 'root'
})
export class PogoAccountsService {

  constructor() { }
}
