import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  ...appConfig, // spread appConfig properties
  
} )
  .catch((err) => console.error(err));
