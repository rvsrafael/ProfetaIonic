import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProfetaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProfetaProvider {

  constructor(private sqlite: SQLite) { }


  public getDB() {
    return this.sqlite.create({
      name: 'profeta.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        // Criando as tabelas
        this.createTables(db);

        // Inserindo dados padrão
        this.insertDefaultUser(db);
      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.executeSql("" +
                      "CREATE TABLE IF NOT EXISTS user (" +
                      "_id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                      "name TEXT NOT NULL, " +
                      "email TEXT NOT NULL, " +
                      "password TEXT NOT NULL, " +
                      "nacionalidade TEXT, " +
                      "idade TEXT )", {})
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));
  }



  private insertDefaultUser(db: SQLiteObject) {

      let query = "INSERT INTO user (name, email, password, nacionalidade, idade) VALUES (?, ?, ?, ?, ?)";
      let data_user = ["Administrador", "adm@profeta.com.br", "123456", "brasileira", "31"];
      db.executeSql(query, data_user).then((data) => {
          console.log(data_user);
      }, (error) => {
          console.log("INSERT ERROR: QUERY -> " + data_user);
      });


  }


}
