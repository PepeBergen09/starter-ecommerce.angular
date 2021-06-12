import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/product-list',
    pathMatch: 'full'
  },
  {
    path: 'home',component: HomeComponent, children: 
    [
      { path: 'product-list', loadChildren: () => import('../product-list/product-list.module').then(m => m.ProductListModule) },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
