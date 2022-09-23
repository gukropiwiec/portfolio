import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectBoxComponent } from './project-box/project-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [CommonModule, TranslateModule, FontAwesomeModule, RouterModule],
    declarations: [ProjectBoxComponent, NavbarComponent, FooterComponent],
    exports: [ProjectBoxComponent, NavbarComponent, FooterComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
