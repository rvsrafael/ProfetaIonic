import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EighthGamesProvider } from '../../providers/eighth-games/eighth-games';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public eighthGames: any;

  constructor(public navCtrl: NavController,
              public eighthGamesProvider: EighthGamesProvider
) {
      this.loadGames();
  }

  loadGames(){
      this.eighthGamesProvider.load()
      .then(data => {
        this.eighthGames = data;
      });
  }

}
