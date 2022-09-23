import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsalfloresComponent } from './esalflores/esalflores.component';
import { ProjectsDetailComponent } from './projects-detail.component';

const routes: Routes = [
    { path: '', component: ProjectsDetailComponent },
    { path: 'esalflores', component: EsalfloresComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsDetailRoutingModule {}
