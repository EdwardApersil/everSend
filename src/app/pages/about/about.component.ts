import { Component } from '@angular/core';
import { ValuesSectionComponent } from "../../components/values-section/values-section.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [ValuesSectionComponent]
})
export class AboutComponent {

}
