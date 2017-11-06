import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class DataService {

  constructor(protected localStorage: AsyncLocalStorage) { }

  private data: Item[] = [
    { id: '001', value: 'Do business one' },
    { id: '233', value: 'Do business two' },
    { id: '354', value: 'Do business three' }
  ];

  setData(data): any {
    if (!data) { data = this.data; }
    this.localStorage.setItem('data', data).subscribe(() => { });
  }

  getData(): any {
    return this.localStorage.getItem('data');
  }
}
