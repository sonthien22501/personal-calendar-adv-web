import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your specific classes
import { Dashboard } from './dashboard/dashboard';
import { Todo } from './todo/todo';

const routes: Routes = [
  // Default redirect
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Route for Dashboard
  { path: 'dashboard', component: Dashboard },

  // Route for Todo
  { path: 'todo', component: Todo }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }