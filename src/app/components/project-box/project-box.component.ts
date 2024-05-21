import { AfterViewInit, Component, Input } from '@angular/core';
import {
    faCode,
    faExternalLinkAlt,
    faInfo
} from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project.interface';
import { enableTooltips } from 'src/app/shared/functions';

@Component({
    selector: 'app-project-box',
    templateUrl: './project-box.component.html',
    styleUrls: ['./project-box.component.scss']
})
export class ProjectBoxComponent implements AfterViewInit {
    @Input() project!: Project;

    faCode = faCode;
    faExternalLinkAlt = faExternalLinkAlt;
    faInfo = faInfo;

    constructor() {}

    ngAfterViewInit(): void {
        enableTooltips();
    }
}
