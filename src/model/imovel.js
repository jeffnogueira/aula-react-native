import Usuario from './usuario';

export default class Imovel {
    IdImovel: int;
    DescricaoImovel: String;
    email: String;
    LogradouroImovel: String;
    Numero: int;
    Complemento: String;
    Bairro: String;
    Cidade: String;
    UF: String;
    SituacaoImovel: String;
    IdUsuario: int;
    Usuario: Usuario;

    constructor() {
        this.IdImovel = 0;
        this.DescricaoImovel = '';
        this.email = '';
        this.LogradouroImovel = '';
        this.Numero = 0;
        this.Complemento = '';
        this.Bairro = '';
        this.Cidade = '';
        this.UF = '';
        this.SituacaoImovel = '';
        this.IdUsuario = 0;
        this.Usuario = {idUsuario: 0, nomeUsuario: '', ideUsuario: '', senhaUsuario: '', email: ''};
    }
  }
  