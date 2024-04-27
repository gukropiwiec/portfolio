import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    faCode,
    faExternalLinkAlt,
    faInfo
} from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/models/project.interface';
import { enableTooltips, hideAllTooltips } from 'src/app/shared/functions';

type ExternalProjectIconType = 'Preview' | 'Code' | 'Detail';

@Component({
    selector: 'app-external-project-icon',
    templateUrl: './external-project-icon.component.html',
    styleUrls: ['./external-project-icon.component.scss']
})
export class ExternalProjectIconComponent implements AfterViewInit {
    @Input() project!: Project;
    @Input() type!: ExternalProjectIconType;
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
