import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
// FIX: Import 'App' from './app' (matching your file name and class name)
import { App } from './app'; 
import { Dashboard } from './dashboard/dashboard';
import { Todo } from './todo/todo'; 

@NgModule({
  declarations: [
    App,       // FIX: Use 'App' here
    Dashboard,
    Todo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ensure this is here
  ],
  providers: [provideZonelessChangeDetection()],
  bootstrap: [App] // FIX: Bootstrapping 'App'
})
export class AppModule { }