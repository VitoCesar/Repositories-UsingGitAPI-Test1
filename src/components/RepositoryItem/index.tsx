import React from "react";
import repositories from "../../store/ducks/repositories";

import {Repository} from '../../store/ducks/repositories/types'

interface OwnProps{
  repository: Repository
}

export default function RepositoryItem({repository}: OwnProps){
  return <table className="ui celled table">
  <thead>

    <tr><th>Repositorios</th>
    <th>Linguagem</th>
    <th>URL</th>
    <th>Data de Criação</th>
    <th>Data da Última Atualização</th>    

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{repository.name}</td>
    </tr>
  </tbody>
</table>

}