import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GamesProvider } from '../../providers/games/games';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public eighthGames: any;

constructor(public navCtrl: NavController,
            public eighthGamesProvider: GamesProvider
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
