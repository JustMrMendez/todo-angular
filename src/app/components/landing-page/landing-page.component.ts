import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from "../sections/hero/hero.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    imports: [CommonModule, HeroComponent]
})
export class LandingPageComponent {

}
