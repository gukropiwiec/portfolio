import { Component } from '@angular/core';
import { projects } from 'src/app/shared/projects';

@Component({
    selector: 'app-esalflores',
    templateUrl: './esalflores.component.html',
    styleUrls: ['./esalflores.component.scss']
})
export class EsalfloresComponent {
    project = projects['esalflores'];

    constructor() {}
}
