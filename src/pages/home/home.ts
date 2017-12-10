import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameProvider } from '../../providers/game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public games: any;

  constructor(public navCtrl: NavController,
                      public gameProvider: GameProvider)
  {
      this.loadGames();

  }

  loadGames() {
    this.gameProvider.load()
    .then(data => {
      this.games = data;
    });
  }

}
