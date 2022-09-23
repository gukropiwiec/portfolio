import { Component } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { technologies } from 'src/app/shared/technologies';

@Component({
    selector: 'app-section-skills',
    templateUrl: './section-skills.component.html',
    styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent {
    faMobileAlt = faMobileAlt;
    technologies = technologies;

    constructor() {}
}
