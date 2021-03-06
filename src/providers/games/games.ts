import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesProvider {

  public eighthGames : any;
  public apiUrl: string = "/api/games";


  constructor(public http: HttpClient) {
    console.log('Hello GamesProvider Provider');
  }

  public load() {

      console.log('Carregando oitavas de finais');
      if (this.eighthGames) {
        return Promise.resolve(this.eighthGames);
      }

      //var paramHeader = { HttpHeaders`x: "Access-Control-Allow-Origin:*" } ;

      return new Promise(resolve => {
        this.http.get(this.apiUrl)
        .subscribe(data => {
          this.eighthGames = data;
          this.eighthGames  = this.eighthGames.eighthGames;
          resolve(this.eighthGames);
        }, err => {
          console.log(err);
        });
      });
    }

}
