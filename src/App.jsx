import { useState } from 'react'
import './App.css'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {

  const [calval, setcalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result)
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calval}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  )
}

export default App
