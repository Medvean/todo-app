import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.model';


@Component({
  selector: 'td-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() id: string;
  @Input() value: string;

  item: Item = {
    id: '',
    value: ''
  };

  @Output() emitted = new EventEmitter<Item>();

  emitValue(id, value) {
    this.item.id = id;
    this.item.value = value;

    this.emitted.emit(this.item);
  }

  constructor() { }

  ngOnInit() {
  }

}
