import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { mainProjects, otherProjects } from 'src/app/shared/projects';

@Component({
    selector: 'app-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit, AfterViewInit {
    projects: Project[] = [];

    constructor() {}

    ngOnInit(): void {
        this.projects = [
            ...mainProjects.filter((el) => el.active),
            ...otherProjects.filter((el) => el.active)
        ];
    }

    ngAfterViewInit(): void {
        scrollTo(0, 0);
    }
}
