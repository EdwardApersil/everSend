import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../service/blog.service';
import { CommonModule } from '@angular/common';
import { Photos } from '../photos';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  post: Post[] = [];
  filteredPosts: Post[] = [];

  numberOfPosts: number = 60;
  numberOfPhotos: number = 30;
  isLoading = false;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPost();
  }

  private getPost() {
    this.isLoading = true; // Set loading to true before making the API call
    this.postService.getFinanceNews()
      .subscribe(
        (posts: Post[]) => {
          this.post = posts;
          this.filterPosts('');
          this.isLoading = false; // Set loading to false when data is loaded
        },
        (error) => {
          console.error("Error fetching post", error);
          this.isLoading = false; // Set loading to false in case of an error
        }
      );
  }
  /**
   * Filters the list of posts based on a search term.
   * If no search term is provided, returns the full list of posts.
   * Otherwise, filters the posts by checking if the post titles include the search term.
   * @param text A string representing the search term to filter the posts by.
   */
  filterPosts(text: string): void {
    if (!text) {
      this.filteredPosts = this.post;
    } else {
      const searchTerm = text.toLowerCase();
      this.filteredPosts = this.post.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.providerName.toLowerCase().includes(searchTerm) 
      );
    }
  }

  getArrayOf(number: number): any[] {
    return Array(number);
  }
}
