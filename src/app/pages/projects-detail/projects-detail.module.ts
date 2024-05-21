import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsDetailRoutingModule } from './projects-detail-routing.module';
import { ProjectsDetailComponent } from './projects-detail.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [ProjectsDetailComponent, DetailComponent],
    imports: [
        CommonModule,
        ProjectsDetailRoutingModule,
        ComponentsModule,
        TranslateModule,
        FontAwesomeModule
    ]
})
export class ProjectsDetailModule {}
