import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [DataService]
})

export class TodoListComponent implements OnInit {

  list: Item[] = [];

  constructor(private dataService: DataService) { }

  myValue: string;
  idx: string;

  onChange(item) {
    this.idx = item.id;
    this.myValue = item.value;

    for (const x of this.list) {
      if (x.id === this.idx) {
        x.value = this.myValue;
        console.log(x.value);
      }
    }

    this.dataService.setData(this.list);
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      if (!data) { this.dataService.setData(data); }
      this.list = data;
    });
  }

}
