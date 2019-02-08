import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, Platform} from '@ionic/angular';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';
import {NavParamsService} from '../../services/nav-params/nav-params.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(public navParamsService: NavParamsService,
                private platform: Platform,
                private googlePlus: GooglePlus,
                private fb: Facebook) {
    }

    ngOnInit() {
        if (this.platform.is('desktop')) {
             this.navParamsService.push('/single-play');
        }
    }


    loginGoogle() {
        this.googlePlus.trySilentLogin({})
            .then(res => {
                console.log(res);
                this.navParamsService.push('/single-play');
            })
            .catch(err => console.error(err));
    }

    loginFacebook() {
        this.fb.getLoginStatus()
            .then((res: any) => {
                if (res.status === 'connected') {
                    this.navParamsService.push('/single-play');
                } else {
                    this.fb.login(['public_profile', 'user_friends', 'email'])
                        .then((ress: FacebookLoginResponse) => {
                            console.log('Logged into Facebook!', ress);
                            this.navParamsService.push('/single-play');
                        })
                        .catch(e => console.log('Error logging into Facebook', e));
                }
            }).catch(e => console.log('Error logging into Facebook', e));
    }
}
