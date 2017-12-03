import { Injectable } from '@angular/core';
import { Http, Headers, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderDetailService {

    constructor(public http: Http) {
    }

    getOrderDetail() {
        let promise = new Promise((resove, reject) => {
            this.http.get('./assets/JSON/order-detail.json', {}).map(res => res.json()).subscribe(res => {
                resove(res);
            });
        });

        return promise;
    }

}

