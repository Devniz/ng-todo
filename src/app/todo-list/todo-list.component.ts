import { Component, OnInit } from '@angular/core';
import {  Item } from './item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  currentItems: any = [];
  model = new Item('');

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.currentItems.push(this.model.item);
  }

}
