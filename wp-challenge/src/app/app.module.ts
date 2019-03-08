import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ItemDetailComponent } from './itemdetail/itemdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FavoritesComponent,
    PagenotfoundComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
