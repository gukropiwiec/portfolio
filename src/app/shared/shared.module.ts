import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FontAwesomeModule,
        RouterModule
     ],
    declarations: [
        ProjectBoxComponent,
        NavbarComponent
    ],
    exports: [
        ProjectBoxComponent,
        NavbarComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule {}