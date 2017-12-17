import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { GamesProvider } from '../../providers/games/games';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public eighthGames: any;

constructor(public afAuth: AngularFireAuth,
            public eighthGamesProvider: GamesProvider,
            public toastCtrl: ToastController
) {
    this.loadGames();
}

  loadGames(){
      this.eighthGamesProvider.load()
                                .then(data => {
                                  this.eighthGames = data;
      });
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {

      if(data.email && data.uid) {
        this.loadGames();
      } else {
        this.toastCtrl.create({
          message: "Ocorreu um problema no seu login",
          duration: 3000
          }).present();
      }

    });

  }

}
