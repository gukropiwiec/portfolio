import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Project } from 'src/app/models/project.interface';
import { enableTooltips } from 'src/app/shared/functions';
import { projects } from 'src/app/shared/projects';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements AfterViewInit {
    project!: Project;
    projectDescription: string = '';
    carouselOptionsOverride: OwlOptions = {
        rewind: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    };

    constructor(route: ActivatedRoute, private router: Router) {
        route.params.subscribe((params) => {
            if (!projects[params['name']]) {
                this.router.navigateByUrl('/projects');
            } else {
                this.project = projects[params['name']];
                this.projectDescription = `ProjectDetailDescription.${params['name']}`;
            }
        });
    }

    ngAfterViewInit(): void {
        enableTooltips();
    }
}
