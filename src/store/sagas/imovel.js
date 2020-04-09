import {call, put, select} from 'redux-saga/effects';
import NetInfo from '@react-native-community/netinfo';
import {ToastActionsCreators} from 'react-native-redux-toast';
import {
    selectImovel,
    incluirImovel
} from '../../services/imovelService';
import ImovelActions from '../ducks/imovel';

/* função para apresentar o erro */

function* apresentarMensagem(tipo, imovel, mensagem) {
  if (tipo === 1) {
    yield put(ImovelActions.requestFailure(imovel));
    yield put(ToastActionsCreators.displayError(mensagem));
  } else {
    yield put(ImovelActions.requestSuccess(imovel));
    yield put(ToastActionsCreators.displayInfo(mensagem));
  }
}

/* Função para pesquisar o imovel a partir do IdeUsuario */

export function* pesquisarImovelPorIdentificacaoDoUsuario(ideUsuario) {
  const retorno = yield selectImovel(ideUsuario)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: resp,
      };
      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}

/* Função para incluir um imovel */

function* incluir(imovel) {
  const retorno = yield incluirImovel(imovel)
    .then((resp) => {
      var ret = {
        tipo: 1,
        mensagem: '',
        imovel: resp,
      };

      return ret;
    })
    .catch((erro) => {
      var ret = {
        tipo: 2,
        mensagem: erro,
        imovel: null,
      };
      return ret;
    });
  return retorno;
}

/* Função para cadastrar um imovel */
export function* manterImovel(action) {
  try {
    const {isConnected} = yield NetInfo.fetch();
    if (isConnected) {
      var mensagemErro = yield consistirDadosImovel(2, action.imovel);
      if (mensagemErro !== '') {
        yield apresentarMensagem(1, action.imovel, mensagemErro);
        return;
      }

      // Atualizar imovel
      if (action.imovel.idImovel === 0) {
        ToastActionsCreators.displayInfo('Incluindo Imovel');
        var retorno = yield incluir(action.imovel);
        if (retorno.tipo === 1) {
          yield apresentarMensagem(
            2,
            retorno.imovel,
            'Inclusão efetuada com sucesso',
          );
          return;
        } else {
          yield apresentarMensagem(1, action.imovel, retorno.mensagem);
          return;
        }
      } else {
        ToastActionsCreators.displayInfo('Atualizando Imovel');
        var retorno = yield alterar(action.imovel);
        if (retorno.tipo === 1) {
          yield apresentarMensagem(
            2,
            retorno.imovel,
            'Alteração efetuada com sucesso',
          );
          return;
        } else {
          yield apresentarMensagem(1, action.imovel, retorno.mensagem);
          return;
        }
      }
    } else {
      yield apresentarMensagem(1, action.imovel, 'Sem conexão com internet');
    }
  } catch (err) {
    yield apresentarMensagem(1, action.imovel, err.message);
    return;
  }
}

function consistirDadosImovel(origem, imovel) {
    if (origem === 2) {
        if (imovel.DescricaoImovel === '') {
            return 'Favor informar a descrição do Imovel.';
        }
        if (imovel.email === '') {
            return 'Favor informar o EMail do Imovel.';
        }
        if (imovel.LogradouroImovel === '') {
            return 'Favor informar o logradouro do Imovel.';
        }
        if (imovel.Numero === '') {
            return 'Favor informar o numero do Imovel.';
        }
        if (imovel.Bairro === '') {
            return 'Favor informar o bairro do Imovel.';
        }
        if (imovel.Cidade === '') {
            return 'Favor informar a cidade do Imovel.';
        }
        if (imovel.Cep === '') {
            return 'Favor informar o cep do Imovel.';
        }
        if (imovel.UF === '') {
            return 'Favor informar o UF do Imovel.';
        }
        if (imovel.IdUsuario === '') {
            return 'Favor informar o usuario do Imovel.';
        }
        if (imovel.SituacaoImovel === '') {
            return 'Favor informar a situação do Imovel.';
        }
    }
    return '';
}
