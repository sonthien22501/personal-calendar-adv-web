import { Injectable } from '@angular/core';

// Good Practice: Define interfaces for your data models
export interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root' // This registers the service as a Singleton globally
})
export class TodoService {
  
  // Private property to hold state
  private todos: TodoItem[] = [
    { id: 1, title: 'Review Lecture 3 Slides', isDone: true },
    { id: 2, title: 'Implement DI Task 03_04', isDone: false },
    { id: 3, title: 'Study for WebTech Exam', isDone: false }
  ];

  constructor() { }

  // Public method to expose data
  getTodos(): TodoItem[] {
    return this.todos;
  }
}