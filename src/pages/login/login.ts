import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../model/user';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public userDefault:  User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public openRegister(): void {
    this.navCtrl.push(RegisterPage);
  }

  public openHome(): void {
    if (false) {

    } else {

    }

  }

}
