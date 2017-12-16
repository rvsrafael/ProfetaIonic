import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  //items: Observable<any>;

  constructor(public http: HttpClient,
              public db: AngularFireDatabase) {

  }

  saveUser(user: User) {
    //this.db.list("/myUsers/").push(user);
    return this.listaUser.push(user);
  }

}
