import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Round} from '../../models/game/round';
import {Question} from '../../models/game/question';
import {CountdownComponent} from 'ngx-countdown';
import {MenuController, NavController, NavParams, PopoverController} from '@ionic/angular';
import {Answer} from '../../models/game/answer';
import {RoundResultsPage} from '../../../../pages/round-results/round-results';
import {RoundHelpPopoverPage} from '../../../../pages/round-help-popover/round-help-popover';
import {NavParamsService} from '../../services/nav-params/nav-params.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-round',
    templateUrl: './round.page.html',
    styleUrls: ['./round.page.scss'],
    animations: [
        trigger('answerSelected', [
            state('selected', style({
                transform: 'scale(1.01)'
            })),
            state('correct', style({
                backgroundColor: 'var(--ion-color-greened)',
                transform: 'scale(1.01)'
            })),
            state('incorrect', style({
                backgroundColor: 'var(--ion-color-danger)',
                transform: 'scale(1.01)'
            })),
            transition('unselected => selected', animate('300ms ease-in')),
            transition('unselected => correct', animate('300ms ease-in')),
            transition('selected => incorrect', animate('300ms ease-in'))
        ])
    ]
})
export class RoundPage implements OnInit {

    @ViewChild('popoverContent', {read: ElementRef})
    content: ElementRef;

    round: Round;
    questionIndex = 0;
    currentQuestion: Question;

    @ViewChild(CountdownComponent)
    counter: CountdownComponent;
    time = 10;

    clickAudio: any;
    successAudio: any;
    unsuccessAudio: any;

    timeoutWidth = 100;

    answerShowed = false;

    constructor(private popoverCtrl: PopoverController,
                private navParams: NavParamsService,
                public menuCtrl: MenuController) {
        this.menuCtrl.enable(false, 'mainMenu');

        this.round = navParams.get('round');
        const questionIndex = navParams.get('questionIndex');
        if (questionIndex) {
            this.questionIndex = questionIndex;
        }

        this.currentQuestion = this.round.questions[this.questionIndex];
    }


    ngOnInit(): void {
        this.clickAudio = new Audio();
        this.clickAudio.src = 'assets/sounds/button-16.mp3';

        this.successAudio = new Audio();
        this.successAudio.src = 'assets/sounds/success.mp3';

        this.unsuccessAudio = new Audio();
        this.unsuccessAudio.src = 'assets/sounds/unsuccess.mp3';
    }

    selectAnswer(answer: Answer) {
        if (!this.answerShowed) {
            this.counter.stop();


            // this.clickAudio.load();
            // this.clickAudio.play();

            answer.selectedState = 'selected';

            setTimeout(() => {
                this.showCorrect();
                setTimeout(() => {
                    this.navParams.push('/round', {
                        round: this.round,
                        questionIndex: this.questionIndex
                    });
                }, 500);
            }, 500);
        }
    }


    showCorrect() {
        this.answerShowed = true;
        this.currentQuestion.answers.forEach(answer => {
            if (answer.correct) {
                if (answer.selectedState === 'selected') {
                    this.successAudio.load();
                    this.successAudio.play();
                } else {
                    this.unsuccessAudio.load();
                    this.unsuccessAudio.play();
                    this.currentQuestion.answers.forEach(a => {
                        if (a.selectedState === 'selected') {
                            a.selectedState = 'incorrect';
                        }
                    });
                }
                answer.selectedState = 'correct';
            }
        });
    }


    goToRoundResults(params) {
        this.navParams.push('/round-results');
    }

    onTimerFinished() {
        this.showCorrect();
    }

    presentPopover(ev) {

        /*let popover = this.popoverCtrl.create(RoundHelpPopoverPage, {
            contentEle: this.content.nativeElement
        });
        console.log(popover);
        popover.present({
            ev: ev
        });*/
    }

}
