import { useState } from 'react'
import './App.css'

function App() {

  const [value ,setvalue]=useState("")

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value} />
          </div>
       
          <div className='row1'>
           
            <input className='equal1' type="button" value="AC"  onClick={e=>setvalue('')}/>
            <input  className='equal1' type="button" value="DEL" onClick={e=>setvalue(value.slice(0,-1)) } />
           
            <input type="button" value="/" onClick={e=>setvalue (value+ e.target.value) }/>
          </div>
          <div className='row1'>
            <input type="button" value="7" onClick={e=>setvalue (value+ e.target.value) } />
            <input type="button" value="8"  onClick={e=>setvalue (value+ e.target.value) }/>
            <input type="button" value="9"  onClick={e=>setvalue (value+ e.target.value) }/>
            <input type="button" value="*"  onClick={e=>setvalue (value+ e.target.value) }/>
          </div>
          <div className='row1'>
            <input type="button" value="4" onClick={e=>setvalue (value+ e.target.value) } />
            <input type="button" value="5"  onClick={e=>setvalue (value+ e.target.value) }/>
            <input type="button" value="6" onClick={e=>setvalue (value+ e.target.value) }/>
            <input type="button" value="+" onClick={e=>setvalue (value+ e.target.value) }/>
          </div> <div className='row1'>
            <input type="button" value="1" onClick={e=>setvalue (value+ e.target.value) }/>
            <input type="button" value="2" onClick={e=>setvalue (value+ e.target.value) }/>
            <input type="button" value="3" onClick={e=>setvalue (value+ e.target.value) } />
            <input type="button" value="3"  onClick={e=>setvalue (value+ e.target.value) }/>
          </div>
          <div className='row'>
          
            <input type="button" value="0" onClick={e=>setvalue (value+ e.target.value) }/>
            <input type="button" value="." onClick={e=>setvalue (value+ e.target.value) }/>
            <input className='equal' type="button" value="=" onClick={e=>setvalue (eval(value)) }/>

          </div>
        </form>
      </div>
    </div>
  )
}

export default App
