import { Injectable } from '@angular/core';
export interface TodoItem {
  id: number;
  title: string;
  type: 'task' | 'event'; // New field for heterogeneous types
  isDone: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: TodoItem[] = [
    // 1. This is a TASK (Standard)
    { id: 1, title: 'Review Lecture 3 Slides', type: 'task', isDone: true },
    
    // 2. This is an EVENT (Change 'type' to 'event')
    { id: 2, title: 'Team Meeting at 10 AM', type: 'event', isDone: false }, 
    
    // 3. This is a TASK
    { id: 3, title: 'Implement DI Task 03_04', type: 'task', isDone: false },
    
    // 4. This is an EVENT (Change 'type' to 'event')
    { id: 4, title: 'Lunch with Mentor', type: 'event', isDone: false }
  ];

  constructor() { }

  getTodos(): TodoItem[] {
    return this.todos;
  }
}