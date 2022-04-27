import React, {useState} from 'react'
import './Create.css'

function Create() {
  const [data, setData] = useState('');
  const [pavadinimas, setPavadinimas] = useState('');
  const [paskirtis, setPaskirtis] = useState('')
  const [suma, setSuma] = useState('');
  const [loading, setLoading] = useState(false)

  const paskirtiesKitimas = (e) => {
    setPaskirtis(e.target.name)
  };

  function formosPatvirtinimas(e) {
    e.preventDefault()

    if(!data || !pavadinimas || !paskirtis || !suma) {
      alert("Įveskite taisyklingus duomenis")
    } else {
      const naujasIrasas = { data, pavadinimas, paskirtis, suma }
  
      setLoading(true)
  
      fetch('http://localhost:8000/irasai', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(naujasIrasas)
      }).then(() => {
        setLoading(false)
      })
  
      setData('');
      setPavadinimas('');
      setPaskirtis('');
      setSuma('');
    }
  }

  return (
    <form id='form' onSubmit={(e) => formosPatvirtinimas(e)}>
        <div><input type="date" required placeholder='Data' value={data} onChange={(e) => setData(e.target.value)}/></div>
        <div><input type="text" required placeholder='Pavadinimas' value={pavadinimas} onChange={(e) => setPavadinimas(e.target.value)}/></div>
        <div><input type="number" required placeholder='Suma' value={suma} onChange={(e) => setSuma(e.target.value)}/></div>
        <div>
          <input type="radio" id="iplaukos" name="Įplaukos" checked={paskirtis === 'Įplaukos'} value={paskirtis} onChange={paskirtiesKitimas}/>
          <label htmlFor="iplaukos">Įplaukos</label>
          <input type="radio" id="islaidos" name="Išlaidos" checked={paskirtis === 'Išlaidos'} value={paskirtis} onChange={paskirtiesKitimas}/>
          <label htmlFor="islaidos">Išlaidos</label>
        </div>
        <button type='submit'>Sukurti įrašą</button>
    </form>
  )
}

export default Create