import { Component, OnInit } from '@angular/core';
import { mainProjects, otherProjects } from 'src/app/shared/projects';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent implements OnInit {
  public mainProjects = mainProjects;
  public otherProjects = otherProjects;

  constructor() { }

  ngOnInit(): void {
  }

}
