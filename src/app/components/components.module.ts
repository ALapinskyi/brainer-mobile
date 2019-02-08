import {NgModule} from '@angular/core';
import {PowerTimerComponent} from './power-timer/power-timer';
import {GameRoundItemComponent} from './game-round-item/game-round-item';
import {RoundDetailsItemComponent} from './round-details-item/round-details-item';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CommonHeaderComponent} from './common-header/common-header.component';
import {CountdownModule} from 'ngx-countdown';
import { CommonFooterComponent } from './common-footer/common-footer.component';

@NgModule({
    declarations: [PowerTimerComponent,
        GameRoundItemComponent,
        RoundDetailsItemComponent,
        CommonHeaderComponent,
        CommonFooterComponent],
    imports: [CommonModule, IonicModule, CountdownModule],
    exports: [PowerTimerComponent,
        GameRoundItemComponent,
        RoundDetailsItemComponent,
        CommonHeaderComponent,
        CommonFooterComponent]
})
export class ComponentsModule {
}
