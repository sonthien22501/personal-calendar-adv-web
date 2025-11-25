import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';
import { TodoService } from '../services/todo';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dashboard],
      // We must provide the service here so the test injector knows how to create it
      providers: [TodoService, provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks on init', () => {
    // A simple test to verify our integration worked
    expect(component.tasks.length).toBeGreaterThan(0);
  });
});