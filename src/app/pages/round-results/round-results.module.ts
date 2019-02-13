import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoundResultsPage } from './round-results.page';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RoundResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [RoundResultsPage]
})
export class RoundResultsPageModule {}
