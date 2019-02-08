import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'single-play', loadChildren: './pages/single-play/single-play.module#SinglePlayPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'round', loadChildren: './pages/round/round.module#RoundPageModule' },
  { path: 'round-results', loadChildren: './pages/round-results/round-results.module#RoundResultsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
