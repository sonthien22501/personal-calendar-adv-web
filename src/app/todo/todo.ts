import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItem } from '../services/todo'; // Imports your existing service

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo implements OnInit {
  
  tasks: TodoItem[] = [];

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.tasks = this.service.getTodos(); // Fetch data on load
  }
}