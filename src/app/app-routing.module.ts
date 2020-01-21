import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UsersComponent } from './works/users/users.component';
import { TaskComponent } from './works/task/task.component';
import { WorksComponent } from './works/works/works.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'work', component:WorksComponent, children:[
    {path:'cenzor', component:CenzorComponent},
    {path:'users', component:UsersComponent},
    {path:'tasklist', component:TaskComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
