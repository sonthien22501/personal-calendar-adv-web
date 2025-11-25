import { Component, OnInit } from '@angular/core';
import { TodoService, TodoItem } from '../services/todo';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  
  // Property to store the data for the template
  tasks: TodoItem[] = [];

  // Dependency Injection happens here
  constructor(private todoService: TodoService) {}

  // Lifecycle hook: Called when component is initialized
  ngOnInit(): void {
    this.tasks = this.todoService.getTodos();
  }
}