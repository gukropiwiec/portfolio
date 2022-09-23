import { Component } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-section-intro',
    templateUrl: './section-intro.component.html',
    styleUrls: ['./section-intro.component.scss']
})
export class SectionIntroComponent {
    faChevronDown = faChevronDown;

    constructor() {}

    goToSection(section: string): void {
        document.getElementById(section)?.scrollIntoView();
    }
}
