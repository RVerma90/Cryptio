import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Currencies provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Currencies {

    private url: string = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'

    private urlHistoric: string = 'https://min-api.cryptocompare.com/data/histoday?fsym='
    private urlHistoric2: string = '&tsym=USD&limit=60&aggregate=3&e=CCCAGG'

    historicalData: any[];

    constructor(private http: Http) { }

    getCurrencies() {
        return this.http.get(this.url)
            // .do(this.logResponse)
            .map(this.extractData)
            .catch(this.catchError);
    }

    private logResponse(res: Response) {
        console.log(res);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private catchError(error: Response | any) {
        console.log(error);
        return Observable.throw(error.json().error || "Server error.")
    }


    topCurrencies(cs) {
      // console.log(cs);
      // console.log(cs.length);
        for (let i = 0; i < cs.length; i++) {
          let URL = this.urlHistoric + cs[i] + this.urlHistoric2;
          // console.log('current',cs[i]);
            return this.http.get(URL)
            .do(this.logResponse)
            // .map(this.extractData)
            .catch(this.catchError);

        };
        // ________________________________________________________________________________
    }


}
