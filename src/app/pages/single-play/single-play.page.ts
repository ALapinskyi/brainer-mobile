import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game/game';
import {LoadingController, ModalController, NavController} from '@ionic/angular';

import {Round} from '../../models/game/round';
import {User} from '../../models/user';
import {GameListItem} from '../../models/simpleGameItem';
import {Game} from '../../models/game/game';
import {NavParamsService} from '../../services/nav-params/nav-params.service';

@Component({
    selector: 'app-single-play',
    templateUrl: './single-play.page.html',
    styleUrls: ['./single-play.page.scss'],
})
export class SinglePlayPage implements OnInit {

    currentUser: User;

    actualGames: GameListItem[];
    errorMessage: string;

    selectedGame: Game;

    coins: number;

    constructor(private gameProvider: GameService,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public navParamsService: NavParamsService) {
        this.setCurrentUser();
        this.setActualGames();

        this.coins = 12;
    }

    ngOnInit() {
    }


    private setActualGames() {
        this.gameProvider.getGamesList().subscribe(
            res => this.actualGames = res,
            errorMessage => this.errorMessage = errorMessage);
    }

    private setCurrentUser() {
        this.currentUser = {
            username: 'thisGamer',
            firstName: 'Boss',
            lastName: 'Gamer',
            password: 'qwerty',
            isActive: true
        };
    }

    private setSelectedGame(game: Game) {
        this.selectedGame = game;

        let currentRound: Round;
        if (game.rounds) {
            currentRound = game.rounds[game.rounds.length - 1];
        }
        if (currentRound !== undefined) {
            this.goToRound(currentRound);
        }
    }

    goToNewGame(params) {
        if (!params) {
            params = {};
        }
        this.navParamsService.push('/');
    }

    selectGame(gameId: string) {

        const loading = this.loadingCtrl.create({
            message: 'Please wait',
            spinner: 'dots'
        });
        // loading.present();


        this.gameProvider.getGameById(gameId)
            .subscribe(res => {
                setTimeout(() => {
                    // loading.dismiss();
                    this.setSelectedGame(res);
                }, 500)
                ;
            }, errorMessage => this.errorMessage = errorMessage);
    }

    /*goToSelectRoundCategory(event: any) {
        const modal = this.modalCtrl.create({component: SelectRoundCategoryPage});
        modal.present();
    }*/

    goToRound(round: Round) {
        this.navParamsService.push('/round', {
            round: round
        });
    }

    goToRoundInfo(gameId: string) {
        const loading = this.loadingCtrl.create({
            message: 'Please wait...',
            spinner: 'dots'
        });
        // loading.present();

        this.gameProvider.getGameById(gameId)
            .subscribe(res => {
                setTimeout(() => {
                    // loading.dismiss();
                    this.navParamsService.push('/round-results', {
                        game: res
                    });

                }, 500)
                ;
            }, errorMessage => this.errorMessage = errorMessage);
    }

}
