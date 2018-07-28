import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'detail/:id', component: DetailComponent},
    { path: '', pathMatch: 'full', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }