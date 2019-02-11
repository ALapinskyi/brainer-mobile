import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameListItem } from '../../models/simpleGameItem';

/**
 * Generated class for the GameRoundItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'game-round-item',
  templateUrl: 'game-round-item.html',
  styleUrls: ['./game-round-item.scss']
})
export class GameRoundItemComponent {

  @Input()
  item: GameListItem;

  @Input()
  ngClass: string;

  constructor() {
  }

  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  onCardClick(clickedEntry: GameListItem): void {
      this.onClick.emit([clickedEntry.id]);
  }

}
