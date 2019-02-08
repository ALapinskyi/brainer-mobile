import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { Game } from '../../src/app/models/game/game';

import { RoundDetailsItemComponent } from '../../src/app/components/round-details-item/round-details-item';

@Component({
  selector: 'page-round-results',
  templateUrl: 'round-results.html'
})
export class RoundResultsPage {

  game: Game;
  test: RoundDetailsItemComponent;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

      this.game = navParams.get('game');
  }
  
}
