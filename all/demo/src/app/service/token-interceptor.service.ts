import { Injectable, Injector  } from '@angular/core';
import {  HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector ) { }

  intercept(req,next){
    let tokenizedReq = req.clone({
      setHeaders: {
        'rc-token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWJPcmdJZCI6MSwicm9sZXMiOlsiQVBQX0FETUlOIiwiQ09NTVVOSVRZX0FETUlOIiwiQU9JX0FETUlOIiwiVVNFUiIsIlNNRSIsIkJST0FEQ0FTVEVSIl0sInVzZXJFeHRlcm5hbElkIjoiMTEiLCJleHAiOjE1NzYzMjE5OTQsInVzZXJJZCI6MTEsImlhdCI6MTU3NjIzNTU5NCwib3JnSWQiOjF9.o9PSGNcON5NAwRPSXwEKQAFtffn9Y_5s2-w-Ukf8s98d3v3UmystBoy_i5_r-1313sWXet-Tqtf6zabma4Zbng'
      }
    })
    return next.handle(tokenizedReq)
  }
}
