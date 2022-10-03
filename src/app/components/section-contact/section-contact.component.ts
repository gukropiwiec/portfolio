import { Component } from '@angular/core';
import {
    faExternalLinkAlt,
    faDownload
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-section-contact',
    templateUrl: './section-contact.component.html',
    styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent {
    faExternalLinkAlt = faExternalLinkAlt;
    faDownload = faDownload;

    constructor(private translateS: TranslateService) {}

    sendFormEmail(): void {
        this.translateS
            .get('Oops! Sorry, functionality in development.')
            .subscribe((res) => {
                alert(res);
            });
    }
}
