import { useState } from 'react'
import './App.css'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {

  const [calval, setcalval] = useState("");

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calval}></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </>
  )
}

export default App
