import {Injectable} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class NavParamsService {
    data: any;

    constructor(public navCtrl: NavController, private router: Router) {
    }

    push(url: string, data: any = '') {
        this.data = data;
         this.navCtrl.navigateForward('/' + url);
        // this.router.navigate([url]);
    }

    pop(url) {
        this.navCtrl.navigateBack(url);
    }

    get(key: string) {
        return this.data[key];
    }
}
