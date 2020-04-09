import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* types & actions creators */
const {Types, Creators} = createActions({
    requestSuccess: ['imovel'],
    requestFailure: ['imovel'],
    cadastrarImovelRequest: ['imovel'],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  loading: false,
  navegar: false,
});

/* Reducers */

export const requestSuccessReducer = (state) => {
    return state.merge({
      loading: false,
      navegar: true,
    });
};

export const requestFailureReducer = (state) => {
    return state.merge({
        loading: false,
    });
};

export const cadastrarImovelRequestReducer = state =>
    state.merge({
        loading: true,
        navegar: false,
    });

export const reducer = createReducer(INITIAL_STATE, {
    [Types.REQUEST_SUCCESS]: requestSuccessReducer,
    [Types.REQUEST_FAILURE]: requestFailureReducer,
    [Types.CADASTRAR_IMOVEL_REQUEST]: cadastrarImovelRequestReducer,
});
