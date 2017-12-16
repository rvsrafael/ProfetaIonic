import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../model/user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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

  listaUser: Observable<User[]>;
  public userDefault:  User = new User();

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider ) {
  }

  ionViewDidLoad() {
    this.getUser();
  }

  public getUser() {
    try {
      this.listaUser = this.userProvider
        .collectionUser()
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });
    } catch (error) {
      console.log("Erro ao listar usuários: " );
    }
  }

  public openRegister(): void {
    this.navCtrl.push(RegisterPage);
  }

  public openHome(): void {
    this.navCtrl.setRoot(HomePage);
    if (false) {

    } else {

    }

  }

}
