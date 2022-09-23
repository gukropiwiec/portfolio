import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsDetailRoutingModule } from './projects-detail-routing.module';
import { ProjectsDetailComponent } from './projects-detail.component';
import { EsalfloresComponent } from './esalflores/esalflores.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ProjectsDetailComponent, EsalfloresComponent],
    imports: [CommonModule, ProjectsDetailRoutingModule, SharedModule]
})
export class ProjectsDetailModule {}
