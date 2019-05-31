import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectRegionComponent } from './select-region/select-region.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { PokeDisplayComponent } from './poke-display/poke-display.component';

const routes: Routes = [
  { path: 'pokedex', component: SelectRegionComponent },
  { path: 'pokedex/load', component: LoadScreenComponent },
  { path: 'pokedex/pokedisplay', component: PokeDisplayComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pokedex' },
  { path: '**', redirectTo: '/pokedex'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
