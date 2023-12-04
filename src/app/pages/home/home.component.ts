import { Component } from '@angular/core';
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavigationComponent, CommonModule, RouterOutlet, HeroComponent]
})
export class HomeComponent {

}
