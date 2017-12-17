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
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Injectable()
export class UserProvider {

  private listaUser  = this.db.list<User>('user-list', );

  constructor(public http: HttpClient,
              public db: AngularFireDatabase,
              public afAuth: AngularFireAuth) {

  }

  collectionUser(){
    // this.listaUser = this.db.list<User>('user-list', ref => ref.orderByChild('nome').equalTo('rafael') );
    return this.listaUser;
  }

  saveUser(user: User) {
    return this.listaUser.push(user);
  }

}
