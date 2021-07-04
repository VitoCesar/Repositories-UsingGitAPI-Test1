import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {getRepositories} from "../../store/ducks/repositories/actions"
import RepositoryItem from "../../components/RepositoryItem";

const Home: React.FC = () => {
  const [search, setSearch] = React.useState<string>('')
  const history = useHistory();
  const dispatch = useDispatch();
  function handleClick(){
    dispatch(getRepositories(search))
    history.push('/repositorylist')
  }
  return (
  
    <div style={{padding: 20}}>
      
      <h1>
        Pagina Principal
      </h1>
      
      <div className="ui search">
        
        <div className="ui icon input">
          
          <i className="search icon">

          </i>
          
          
          <input 
          className="prompt" 
          placeholder="Inserir Nome do Usuário aqui..."
          onChange={ e => setSearch(e.target.value)} >
          
          </input>
        </div>
        
        <button 
        className="ui primary button"
        onClick={handleClick} style={{margin: 10, borderRadius: 10, padding: 10, cursor: 'pointer'}}>
        <i className="github icon"></i>
        Buscar
        </button>
        
      </div>
      
    </div>
    
  
  
  )
}


export default Home;
