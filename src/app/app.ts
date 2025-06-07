import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { IconSocialComponent } from './icon-social/icon-social.component';
import { ExperienceComponent } from './experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, PresentationComponent, IconSocialComponent, ExperienceComponent],
  templateUrl: './app.html',
})
export class App {
  
}
