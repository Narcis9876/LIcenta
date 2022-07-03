import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaliiProfComponent } from './detalii-prof/detalii-prof.component';


import { HomeComponent } from './home/home.component';
import { IntoPageComponent } from './into-page/into-page.component';
import { JocComponent } from './joc/joc.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { MapStudComponent } from './map-stud/map-stud.component';
import { AddmatComponent } from './matstud/addmat/addmat.component';
import { MatstudComponent } from './matstud/matstud.component';
import { ViewComponent } from './matstud/view/view.component';
import { ProfesoriComponent } from './profesori/profesori.component';

const routes: Routes = [
  {path:'', component:IntoPageComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'4Studs/map', component:MapStudComponent, canActivate:[AuthGuard]},
  {path:'4Studs/Profesori', component:ProfesoriComponent, canActivate:[AuthGuard]},
  {path:'4Studs/Profesori/NapoleonSireteanu', component: DetaliiProfComponent},
  {path:'4Studs/materialeDeStudiu',component:MatstudComponent, canActivate:[AuthGuard], children:[
    {path:'', redirectTo:'adaugaMateriale', pathMatch:'full'},
    {path:'adaugaMateriale', component:AddmatComponent},
    {path:'articole', component:ViewComponent} ]},
  {path:'4Studs/divertisment', component:JocComponent, canActivate:[AuthGuard]},
  {path:'**', redirectTo:'home'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
