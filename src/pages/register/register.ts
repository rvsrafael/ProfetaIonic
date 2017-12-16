import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { UserProvider } from '../../providers/user/user';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  user: User = new User();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    var registro = this.navParams.get('user');
    if (registro != undefined) {
      this.user = registro;
    }
  }
  public register(user: any): void {
    console.log(user);
    try {
      this.userProvider.saveUser(user);
    } catch (error) {
      console.log("Erro ao efetuar o Cadastro");
    }
  }

}
