import { Component } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import {
    technologiesFrontend,
    technologiesBackend
} from 'src/app/shared/technologies';

@Component({
    selector: 'app-section-skills',
    templateUrl: './section-skills.component.html',
    styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent {
    faMobileAlt = faMobileAlt;
    technologiesFrontend = technologiesFrontend;
    technologiesBackend = technologiesBackend;

    constructor() {}
}
