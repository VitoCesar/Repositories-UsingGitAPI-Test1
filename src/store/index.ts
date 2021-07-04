import { createStore, applyMiddleware, Store} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from './ducks/repositories/types'
import thunk from 'redux-thunk'

import rootReducer from "./ducks/rootReducer";


export interface ApplicationState {
  repositories: RepositoriesState
}



const store: Store<ApplicationState> = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;