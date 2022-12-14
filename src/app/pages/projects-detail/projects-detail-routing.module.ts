import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ProjectsDetailComponent } from './projects-detail.component';

const routes: Routes = [
    { path: '', component: ProjectsDetailComponent },
    { path: ':name', component: DetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsDetailRoutingModule {}
