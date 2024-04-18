import { Component } from '@angular/core';
import { mainProjects, otherProjects } from 'src/app/shared/projects';

@Component({
    selector: 'app-section-projects',
    templateUrl: './section-projects.component.html',
    styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent {
    mainProjects = mainProjects.filter((el) => el.active);
    otherProjects = otherProjects.filter((el) => el.active);

    constructor() {}
}
