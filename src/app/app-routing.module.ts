import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'top-bar', loadChildren: () => import('./modules/top-bar/top-bar.module').then(m => m.TopBarModule) },
  
 
  
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  
  { path: 'shared', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) }
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







