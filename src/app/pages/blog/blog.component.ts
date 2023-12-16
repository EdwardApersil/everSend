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
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  post: Post[] = [];
  images: any[] = [];


  numberOfPosts: number = 30;
  numberOfPhotos: number = 30;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPost();
    this.getPhotos();
  }

  private getPost() {
    this.postService.getAllPost()
      .subscribe(
        (res: any) => {
          this.post = res;
          console.log(res);
          console.log("Hello")
        },
        (error) => {
          console.error("Error fetching post", error);
          // additional error handling here  
        }
      );
  }

  private getPhotos() {
    this.postService.getPhotos()
     .subscribe(
        (res: any) => {
          this.images = res;
          console.log(res);
          console.log("Hello")
          // additional error handling here
          this.postWithPhoto();
        },
        (error) => {
          console.error("Error fetching post", error);
          // additional error handling here  
        }
      );
  }

  private postWithPhoto(){
    this.post.forEach((post: any) => {
      const postImages = this.images.filter((images: any) =>{
        return images.postId === post.id
      })
      post.photos = postImages.slice(0, 30);
    })
  }

}
