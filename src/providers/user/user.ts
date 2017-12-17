import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
//import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp,  } from 'angularfire2';
import * as firebase from 'firebase';
import { User } from '../../model/user';
import { HomePage } from '../../pages/home/home';
import { FirebaseListObservable } from "angularfire2/database-deprecated";


@Injectable()
export class UserProvider {

  private listaUser  = this.db.list<User>('user-list', );

  constructor(public http: HttpClient,
              public db: AngularFireDatabase,
              public afAuth: AngularFireAuth) {

  }

  collectionUser(){
    this.listaUser = this.db.list<User>('user-list', ref => ref.orderByChild('nome').equalTo('x`') );
    return this.listaUser;
  }

  saveUser(user: User) {
    this.saveLogin(user);
    return this.listaUser.push(user);
  }

  async saveLogin(user: User) {
    try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
                                          user.email, user.senha);
    } catch (e) {
      console.error(e);
    }
  }

  async efetuarLogin(user: User) {
    try{
        const result = await this.afAuth.auth.signInWithEmailAndPassword(
                                          user.email, user.senha);

        console.log("Result do login: "+ result);

        return result;


    } catch (e) {
      console.error(e);
    }
  }

}
