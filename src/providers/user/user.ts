import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
//import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  //items: Observable<any>;

  constructor(public http: HttpClient,
              public db: AngularFireDatabase) {

  }

  public saveUser() {
    this.db.list("/myUsers/").push( "Rafael");
  }

}
