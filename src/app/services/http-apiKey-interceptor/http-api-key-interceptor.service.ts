import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpApiKeyInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req, next) {
    const apiKeyReq = req.clone({
      setHeaders: { 'X-CoinAPI-Key': environment.apiKey },
    });

    return next.handle(apiKeyReq);
  }
}
