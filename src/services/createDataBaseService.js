import {OpenDataBase} from './database.js';

export function CreateDataBaseService() {
  try {
    const db = OpenDataBase();

    const sqlCreateTableUser =
      'CREATE TABLE IF NOT EXISTS Usuario (' +
      ' IdUsuario INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,' +
      ' NomeUsuario VARCHAR(100) NOT NULL,' +
      ' IdeUsuario VARCHAR(50) NOT NULL,' +
      ' SenhaUsuario VARCHAR(200) NOT NULL,' +
      ' EMail varchar(200) not null );';
    const sqlCreateIndexUserIdeUsuario =
      'CREATE UNIQUE INDEX IF NOT EXISTS [IX_IdeUsuario] ON [Usuario] ([IdeUsuario]);';
    const sqlCreateIndexUserEmail =
      'CREATE UNIQUE INDEX IF NOT EXISTS [IX_Email] ON [Usuario] ([EMail]);';
      

    const sqlCreateTableImmobile =
      `CREATE TABLE IF NOT EXISTS Imovel (
      IdImovel SMALLINT PRIMARY KEY AUTOINCREMENT NOT NULL,
      DescricaoImovel VARCHAR(200) NOT NULL,
      email VARCHAR(200) NOT NULL,
      LogradouroImovel VARCHAR(200) NOT NULL,
      Numero SMALLINT NOT NULL, Complemento VARCHAR(30), Bairro VARCHAR(50) NOT NULL,
      Cidade VARCHAR(50), Cep VARCHAR(50), UF: VARCHAR(2) NOT NULL, SituacaoImovel: VARCHAR(1) NOT NULL,
      IdUsuario INTEGER,
      FOREIGN KEY(IdUsuario) REFERENCES Usuario(IdUsuario));`;

    db.transaction(function(txn) {
      txn.executeSql(sqlCreateTableUser, []);
      txn.executeSql(sqlCreateIndexUserIdeUsuario, []);
      txn.executeSql(sqlCreateIndexUserEmail, []);
      txn.executeSql(sqlCreateTableImmobile, []);
    });

    return '';
  } catch (err) {
    return err.message;
  }
}
