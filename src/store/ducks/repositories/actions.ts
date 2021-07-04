import {Dispatch} from 'redux'

import api from '../../../services/api';
import { Repository, RepositoryDispatchTypes, REPOSITORY_LOADING, LOAD_FAILURE, LOAD_SUCCESS } from './types'

export const getRepositories = (search: string) => async (dispatch: Dispatch<RepositoryDispatchTypes>) => {
  try {
    dispatch({
      type: REPOSITORY_LOADING,
      data: {
        search: search
      }
    });
    const response = await api.get(`http://api.github.com/users/${search}/repos`).then(res => res.data)
    const repositories: Repository[] = response.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
      }
    })

    dispatch({
      type: LOAD_SUCCESS,
      payload:{
        repository: repositories
      }
    })
  } catch (e) {
    dispatch({
      type: LOAD_FAILURE
    })
  }
}
