import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
//import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { User } from '../../model/user';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  private listaUser = this.db.list<User>('user-list', );
  private user1:  User = new User();
  private listauser2: Observable<User[]>;
  private user4: any;

 private keys: User[];

  constructor(public http: HttpClient,
              public db: AngularFireDatabase) {

  }

  collectionUser(){
    console.log("oi .....");
    this.listaUser = this.db.list<User>('user-list', ref => ref.orderByChild('nome').equalTo('rafael') );

    // this.user4 = this.db.list<User>('user-list',
    //                             ref => ref.orderByChild('nome').equalTo('rafael') );


    return this.listaUser;
  }

  saveUser(user: User) {
    return this.listaUser.push(user);
  }

}
