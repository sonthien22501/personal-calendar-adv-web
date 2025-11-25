import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TodoService } from './todo';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // providers: [TodoService] is optional here because we used 
      // @Injectable({ providedIn: 'root' }) in the service itself,
      // but it doesn't hurt to be explicit in tests.
    providers: [provideZonelessChangeDetection()]

    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default tasks', () => {
    const todos = service.getTodos();
    
    // Verify we get the expected number of items
    expect(todos.length).toBe(3);
    
    // Verify specific data integrity
    expect(todos[0].title).toBe('Review Lecture 3 Slides');
    expect(todos[0].isDone).toBeTrue();
  });
});