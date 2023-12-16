import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {


  submit(){
    alert("Thank you for your interest in joining our team. We will get back to you soon.");
  }

}
