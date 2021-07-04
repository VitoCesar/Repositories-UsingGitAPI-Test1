/**
 * Action types
 */
export const REPOSITORY_LOADING = 'REPOSITORY_LOADING'
export const  LOAD_SUCCESS = 'LOAD_SUCCESS'
export const  LOAD_FAILURE = 'LOAD_FAILURE'

interface RepositoryLoading{
  type: typeof REPOSITORY_LOADING,
  data?: {
    search: string,
  }
}

interface RepositorySuccess {
  type: typeof LOAD_SUCCESS,
  payload: {
    repository: Repository[]
  }
}

interface RepositoryFail {
  type: typeof LOAD_FAILURE
}

export type RepositoryDispatchTypes =  RepositoryLoading | RepositorySuccess | RepositoryFail

/**
 * Data types
 */
export interface Repository {
  id: number
  name: string
}

/**
 * State types
 */
export interface RepositoriesState {
  readonly data: Repository[],
  readonly loading: boolean,
  readonly error: boolean,
  search: string,
}