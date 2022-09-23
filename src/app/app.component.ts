import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    id = 'tsparticles';
    particlesPath = 'assets/ts-particles/ts-particles-config.json';
}
