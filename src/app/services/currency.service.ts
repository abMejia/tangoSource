import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CurrencyService {

  constructor(
    private http: Http,    
  ) { }

  getCurrency() {
    return this.http.get('/api/currency')
    .map(res => res.json())
  }
  
  getBTC() {
    return this.http.get('/api/BTC')
    .map(res => res.json())
  }

  convert(currency, coin, currencyNumber, coinNumber){
    return this.http.get('/api/conversion/'+ currency + '/' + coin )
    .map(res => res.json())
  }
}
