import { By } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {

  }
  getItems() {
        let orders = [1,2,3,5,7,9,10,14];
        return orders;
  }
}
