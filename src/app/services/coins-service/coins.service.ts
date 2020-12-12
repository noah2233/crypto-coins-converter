import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Currency } from '../../models/Currency';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  getAssetsIcons(): Observable<Currency[]> {
    return this.http.get<Currency[]>('https://rest.coinapi.io/v1/assets/icons/32');
  }

  getExchange(from: string, to: string): Observable<any[]> {
    return this.http.get<any[]>(`https://rest.coinapi.io/v1/exchangerate/${from}/${to}?`);
  }

  getAssets(): Observable<any[]> {
    return this.http.get<any[]>(`https://rest.coinapi.io/v1/assets`);
  }
}
