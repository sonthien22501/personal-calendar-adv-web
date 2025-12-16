import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app'; 
import { Dashboard } from './dashboard/dashboard';
import { Todo } from './todo/todo'; 
import { TodoItemComponent } from './todo/item/todo-item';
import { Login } from './login/login';
import { ExternalData } from './external/external';
@NgModule({
  declarations: [
    App,
    Dashboard,
    Todo,
    TodoItemComponent,
    Login,
    ExternalData
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideZonelessChangeDetection(),
    provideHttpClient()
  ],
  bootstrap: [App] // FIX: Bootstrapping 'App'
})
export class AppModule { }