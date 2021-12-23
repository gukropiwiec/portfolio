import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsDetailsRoutingModule } from './projects-details-routing.module';
import { ProjectsDetailsComponent } from './projects-details.component';


@NgModule({
  declarations: [
    ProjectsDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectsDetailsRoutingModule
  ]
})
export class ProjectsDetailsModule { }
