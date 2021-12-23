import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects-details', loadChildren: () => import('./pages/projects-details/projects-details.module').then(m => m.ProjectsDetailsModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' } )],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
