import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent }  from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ItemDetailComponent } from './itemdetail/itemdetail.component';


const routes: Routes = [
  { path: 'items', component: DashboardComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
