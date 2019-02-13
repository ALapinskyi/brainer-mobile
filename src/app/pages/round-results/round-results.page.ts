import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game/game';
import {RoundDetailsItemComponent} from '../../components/round-details-item/round-details-item';
import {NavParamsService} from '../../services/nav-params/nav-params.service';

@Component({
  selector: 'app-round-results',
  templateUrl: './round-results.page.html',
  styleUrls: ['./round-results.page.scss'],
})
export class RoundResultsPage implements OnInit {

  game: Game;
  test: RoundDetailsItemComponent;

  constructor(public navParams: NavParamsService) {

    this.game = navParams.get('game');
  }

  ngOnInit() {
  }

}
