import { Component, Input } from '@angular/core';
import { TodoItem } from '../../services/todo'; // Imports the Interface

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
// FIX: Rename class to 'TodoItemComponent' to avoid conflict with the interface
export class TodoItemComponent { 
  
  // Now 'TodoItem' clearly refers to the Interface imported on line 2
  @Input() item!: TodoItem; 
}