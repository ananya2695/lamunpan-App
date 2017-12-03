import { Injectable } from '@angular/core';
import { Http, Headers, Request } from '@angular/http';
import 'rxjs/add/operator/map';
import { homeModel } from './category.model';

@Injectable()
export class CategoryService {

    constructor(public http: Http) {
    }

    getCatgory() {

        let promise = new Promise((resove, reject) => {
            console.log('pass');
            this.http.get('./assets/JSON/category.json', {}).map(res => res.json()).subscribe(res => {
                resove(res as homeModel);
            });
        });

        return promise;
    }

}

