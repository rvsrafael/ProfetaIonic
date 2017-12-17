import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { UserProvider } from '../../providers/user/user';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LoginPage } from '../login/login';

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
    public afAuth: AngularFireAuth,
    public userProvider: UserProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    var registro = this.navParams.get('user');
    if (registro != undefined) {
      this.user = registro;
    }
  }

  public openLogin(): void {
    this.navCtrl.setRoot(LoginPage);
  }

  public register(user: any): void {
    console.log(user);
    try {
      this.userProvider.saveUser(user);
      this.saveLogin(user);
    } catch (error) {
      console.log("Erro ao efetuar o Cadastro");
    }
  }
  async saveLogin(user: User) {
    try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
        this.toastCtrl.create({
          message: "Cadastro efetuado",
          duration: 3000
          }).present();
        this.openLogin();
    } catch (e) {
      console.error(e);
      this.toastCtrl.create({
        message: e.message,
        duration: 3000
        }).present();
    }
  }

}
