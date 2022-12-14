import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { Technology } from 'src/app/models/technology.interface';

@Component({
    selector: 'app-card-technologies',
    templateUrl: './card-technologies.component.html',
    styleUrls: ['./card-technologies.component.scss']
})
export class CardTechnologiesComponent {
    @Input() techs!: Technology[] | undefined;

    constructor() {}
}
