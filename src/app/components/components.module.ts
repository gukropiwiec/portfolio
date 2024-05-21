import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { SectionIntroComponent } from './section-intro/section-intro.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { SectionSkillsComponent } from './section-skills/section-skills.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardTechnologiesComponent } from './card-technologies/card-technologies.component';
import { TechItemComponent } from './tech-item/tech-item.component';
import { ExternalProjectIconComponent } from './external-project-icon/external-project-icon.component';

const moduleComponents = [
    CarouselComponent,
    SectionAboutComponent,
    SectionContactComponent,
    SectionIntroComponent,
    SectionProjectsComponent,
    SectionSkillsComponent,
    TimelineComponent,
    ProjectBoxComponent,
    NavbarComponent,
    FooterComponent,
    CardTechnologiesComponent,
    TechItemComponent,
    ExternalProjectIconComponent
];

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FontAwesomeModule,
        RouterModule,
        CarouselModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
