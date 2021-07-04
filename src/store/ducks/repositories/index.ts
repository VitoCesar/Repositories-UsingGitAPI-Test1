import {Reducer} from 'redux'
import {RepositoryDispatchTypes, RepositoriesState, REPOSITORY_LOADING, LOAD_SUCCESS, LOAD_FAILURE} from './types'

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
  search: ''
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action: RepositoryDispatchTypes) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return  {...state, loading: false, error: false, data: action.payload.repository}
    case LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: []}
    case REPOSITORY_LOADING:
      return { ...state, loading:true, search: action.data?.search ?? ''}
    default:
      return state
  }
}

export default reducer