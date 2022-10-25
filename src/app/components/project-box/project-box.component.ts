import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    faCode,
    faExternalLinkAlt,
    faInfo
} from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project.interface';
import { enableTooltips, hideAllTooltips } from 'src/app/shared/functions';

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

    constructor(private router: Router) {}

    ngAfterViewInit(): void {
        enableTooltips();
    }

    openLink(link: string | undefined): void {
        if (!link) {
            return;
        }
        hideAllTooltips();
        window.open(link, '_blank');
    }

    navigateToDetails(detailUrl: string | undefined): void {
        if (!detailUrl) {
            return;
        }
        hideAllTooltips();
        this.router.navigateByUrl(`projects/${detailUrl}`);
    }

    hideTooltips() {
        hideAllTooltips();
    }
}
