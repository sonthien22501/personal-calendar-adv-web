import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../services/external.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-external',
  standalone: false,
  templateUrl: './external.html',
  styleUrl: './external.scss'
})
export class ExternalData implements OnInit {
  
  posts: Post[] = [];
  isLoading = true;

  constructor(private api: ExternalService) {}

  ngOnInit() {
    // Subscribe to the stream to get the data
    this.api.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 10); // Limit to top 10 for readability
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load posts', err);
        this.isLoading = false;
      }
    });
  }
}