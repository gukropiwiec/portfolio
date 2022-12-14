import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from 'src/app/models/project.interface';
import { projects } from 'src/app/shared/projects';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    project!: Project;
    carouselOptionsOverride: OwlOptions = {
        dots: true,
        nav: false,
        loop: true
    };

    constructor(route: ActivatedRoute, private router: Router) {
        route.params.subscribe((params) => {
            if (!projects[params['name']]) {
                this.router.navigateByUrl('/projects');
            } else {
                this.project = projects[params['name']];
            }
        });
    }
}
