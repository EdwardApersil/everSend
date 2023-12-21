import { CommonModule } from '@angular/common';
import { PostService } from './../service/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent implements OnInit{

  stocks: any[] = [];

  constructor(
    private readonly postService: PostService
  ){

  }

  ngOnInit(): void {
    this.getAllStocks();
  }

// Assuming data is an object
getAllStocks() {
  this.postService.getStocks().subscribe(
    (data: any) => {
      // Check if data is an object
      if (typeof data === 'object' && data !== null) {
        // Convert the object values into an array
        this.stocks = Object.values(data);
        console.log(this.stocks);
      } else {
        // Handle the case where data is not an object
        console.error('Invalid data format. Expected an object.');
      }
    },
    (error) => {
      console.error('Error fetching stocks:', error);
    }
  );
}


}
