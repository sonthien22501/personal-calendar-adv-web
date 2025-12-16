import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideZonelessChangeDetection } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app'; 
import { Dashboard } from './dashboard/dashboard';
import { Todo } from './todo/todo'; 
import { TodoItemComponent } from './todo/item/todo-item';
import { Login } from './login/login';
@NgModule({
  declarations: [
    App,
    Dashboard,
    Todo,
    TodoItemComponent,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideZonelessChangeDetection()],
  bootstrap: [App] // FIX: Bootstrapping 'App'
})
export class AppModule { }