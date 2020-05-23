import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../guards/auth.guard';
import { TesteHomeComponent } from './teste-home/teste-home.component';


const routes: Routes = [
  /*um json para cada rota */


  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "teste", component: TesteHomeComponent, canActivate: [AuthGuard] },
  { path: "teste1", component: TesteHomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
