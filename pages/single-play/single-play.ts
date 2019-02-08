import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { NewGamePage } from '../new-game/new-game';
import { SelectRoundCategoryPage } from '../select-round-category/select-round-category';
import { GameService } from '../../src/app/services/game/game';
import { Game } from '../../src/app/models/game/game';
import { User } from '../../src/app/models/user';
import { GameListItem } from '../../src/app/models/simpleGameItem';
import { Round } from '../../src/app/models/game/round';

import { RoundPage } from '../round/round';
import { RoundResultsPage } from '../round-results/round-results';

import { PowerTimerComponent } from '../../src/app/components/power-timer/power-timer';
import { GameRoundItemComponent } from '../../src/app/components/game-round-item/game-round-item';

import { CountdownComponent, Config } from 'ngx-countdown';
import { trigger,style,transition,animate,state } from '@angular/animations';

@Component({
  selector: 'page-single-play',
  templateUrl: 'single-play.html',
  animations: [
    trigger('expandGameCard', [
      state('true',   style({
        opacity: '1',
        height: '100%'
      })),
      state('false',   style({
        opacity: '0',
        height: '0%'
      })),
      transition('* <=> true', animate('500ms ease-in')),
      transition('true <=> false', animate('500ms ease-in'))
    ])
  ]
})
export class SinglePlayPage {

  currentUser: User;

  actualGames: GameListItem[];
  errorMessage: string;

  selectedGame: Game;

  coins: number;

  constructor(private gameProvider: GameService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {
      this.setCurrentUser();
      this.setActualGames();

      this.coins = 12;
  }
  

  private setActualGames(){
    this.gameProvider.getGamesList().subscribe(
      res => this.actualGames = res, 
      errorMessage => this.errorMessage = errorMessage);
  }

  private setCurrentUser() {
    this.currentUser = {
      username: "thisGamer",
      firstName: "Boss",
      lastName: "Gamer",
      password: "qwerty",
      isActive: true
    }
  }

  private setSelectedGame(game: Game){
    this.selectedGame = game;

    let currentRound: Round;
    if(game.rounds) {
       currentRound = game.rounds[game.rounds.length - 1];
    }
    if(currentRound !== undefined) {
      this.goToRound(currentRound);
    }
  }

  goToNewGame(params){
    if (!params) params = {};
    this.navCtrl.push(NewGamePage);
  }

  selectGame(gameId: string){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots'
    });
    loading.present();
    

    this.gameProvider.getGameById(gameId)
    .subscribe(res => {
      setTimeout(() => {
        loading.dismiss();
        this.setSelectedGame(res);
      }, 500)
      ;
    }, errorMessage => this.errorMessage = errorMessage);
  }
  
  goToSelectRoundCategory(event: any){
    let modal = this.modalCtrl.create(SelectRoundCategoryPage);
    modal.present();
  }
  
  goToRound(round: Round){
    this.navCtrl.push(RoundPage, {
      round: round
    });
  }

  goToRoundInfo(gameId: string){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots'
    });
    loading.present();

    this.gameProvider.getGameById(gameId)
    .subscribe(res => {
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.push(RoundResultsPage, {
          game: res
        });
      }, 500)
      ;
    }, errorMessage => this.errorMessage = errorMessage);
  }


}
