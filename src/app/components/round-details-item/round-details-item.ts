import { Component, Input } from '@angular/core';
import { Round } from '../../models/game/round';
import {User} from '../../models/user';
import {Player} from '../../models/game/player';

/**
 * Generated class for the RoundDetailsItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'round-details-item',
  templateUrl: 'round-details-item.html',
  styleUrls: ['./round-details-item.scss']
})
export class RoundDetailsItemComponent {
  private currentUser: User;

  @Input() round: Round;

  @Input() players: Player[];
  

  constructor() {
    this.setCurrentUser();
  }


  private setCurrentUser() {
    this.currentUser = {
      username: 'olapinskyi',
      firstName: 'Boss',
      lastName: 'Gamer',
      password: 'qwerty',
      isActive: true
    };
  }

}
