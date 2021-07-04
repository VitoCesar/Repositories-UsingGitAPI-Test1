import React, { Component} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions'

import RepositoryItem from '../RepositoryItem'
import { useHistory } from 'react-router-dom';

const RepositoryList: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const repositories = useSelector((state: ApplicationState) => state.repositories.data)
  
  function handleClick(){
    history.push('/')
  }
    
    return (
      
      <div>
        <h2>
          Detalhes Repositorios
        </h2>
        
        <ul>
          {repositories.map(repository => (
            <RepositoryItem key={repository.id} repository={repository}/>
          ))}
        </ul>

        <button 
        className="ui primary button"
        onClick={handleClick} style={{margin: 10, borderRadius: 10, padding: 10, cursor: 'pointer'}}>
            Página Inicial
        </button>

      </div>
      
    )
  
}



export default RepositoryList