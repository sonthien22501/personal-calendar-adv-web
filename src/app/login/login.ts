import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login{

  // This object holds the form data
  credentials = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Login attempt:', this.credentials);
    
    // Simple mock validation
    if (this.credentials.username && this.credentials.password) {
      alert('Login Successful!');
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    } else {
      alert('Please enter username and password');
    }
  }
}