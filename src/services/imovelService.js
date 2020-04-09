import {OpenDataBase} from './database.js';

export function selectImovel(IdUsuario) {
    return new Promise((resolve, reject) => {
      try {
        const sql = `select * from imovel where IdUsuario = (?)`;
  
        const db = OpenDataBase();
        db.transaction((tx) => {
          tx.executeSql(sql, [IdUsuario ], (tx, results) => {
            if (results.rows.length === 0) {
              reject('Nenhum imovel encontrado');
            }
  
            var imoveis = results.rows;
  
            resolve(imoveis);
          });
        });
      } catch (err) {
        reject(err.message);
      }
    });
}

export function incluirImovel(imovel) {
  return new Promise((resolve, reject) => {
    try {
      var sql =
        `insert into Imovel (DescricaoImovel, email, LogradouroImovel, Numero, Complemento, 
            Bairro, Cidade, Cep, UF, SituacaoImovel, IdUsuario) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const db = OpenDataBase();
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          [
            imovel.DescricaoImovel,
            imovel.email,
            imovel.LogradouroImovel,
            imovel.Numero,
            imovel.Complemento,
            imovel.Bairro,
            imovel.Cidade,
            imovel.Cep,
            imovel.UF,
            imovel.SituacaoImovel,
            imovel.IdUsuario,
          ],
          (tx, results) => {
            imovel.idImovel = results.insertId;
            resolve(imovel);
          },
        );
      });
    } catch (err) {
      reject(err.message);
    }
  });
}
