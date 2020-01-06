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
        'rc-token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWJPcmdJZCI6MSwicm9sZXMiOlsiQVBQX0FETUlOIiwiQ09NTVVOSVRZX0FETUlOIiwiQU9JX0FETUlOIiwiVVNFUiIsIlNNRSIsIkJST0FEQ0FTVEVSIl0sInVzZXJFeHRlcm5hbElkIjoiMTEiLCJleHAiOjE1NzY2NTIxNTUsInVzZXJJZCI6MTEsImlhdCI6MTU3NjU2NTc1NSwib3JnSWQiOjF9.gjGosPtyGh2NqMJ_JmQGyZaBNpjt-B3mLkGXWTo2HZMvZ3kb8-l1uGzJtRAVQ_qiY3I2F6eeFYra1hLn6-2pVA'
      }
    })
    return next.handle(tokenizedReq)
  }
}
