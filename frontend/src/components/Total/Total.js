import React from 'react'
import './Total.css'

function Total() {
  return (
    <div className='total'>
        <div className='total-box box-1'>
            <p>Kreditas</p>
            <p>750</p>
        </div>

        <div className='total-box box-2'>
            <div><p>Debetas</p></div>
            <p>500</p>
        </div>

        <div className='total-box box-3'>
            <div><p>Balansas</p></div>
            <p>250</p>
        </div>
        
    </div>
  )
}

export default Total