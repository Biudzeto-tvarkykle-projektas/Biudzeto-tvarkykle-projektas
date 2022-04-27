import React, {useEffect, useState} from 'react'
import './Summary.css'
import useFetch from '../../hooks/useFetch'

function Summary() {
  const {data, loading, error} = useFetch("http://localhost:8000/irasai")
  

  function istrintiIrasa(id) {
    fetch('http://localhost:8000/irasai/' + id, {
      method: 'DELETE'
    }).then(() => {
      
    })
  }

  return (
    <table id='table'>
      <tr>
        <th>Data</th>
        <th>Pavadinimas</th>
        <th>Paskirtis</th>
        <th>Suma</th>
        <th>Veiksmai</th>
      </tr>

  {error && <div>Error: {error}</div>}
  {loading && <div>Loading...</div>}

  {data?.map((irasas, i)=> (
    <tr key={i}>
      <td>{irasas.data}</td>
      <td>{irasas.pavadinimas}</td>
      <td style={{ color: irasas.paskirtis === 'Įplaukos'? 'green': 'red'}}>{irasas.paskirtis}</td>
      <td>{irasas.suma}</td>
      <td>
        <button className='edit'>Pakeisti</button>
        <button className='delete' onClick={() => istrintiIrasa(i + 1)}>Ištrinti</button>
      </td>
    </tr>
  ))}
</table>
  )
}

export default Summary