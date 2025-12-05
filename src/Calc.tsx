// https://niisku.lab.fi/~tyynekaisa/calculator

import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import CalculatorUI from './components/calculatorUI'
import calculate from './functions/calculate'

export default function Calculator() {
  const [display, setDisplay] = useState<string>('0')
  const [firstOperand, setFirstOperand] = useState<string>('')
  const [secondOperand, setSecondOperand] = useState<string>('')
  const [operator, setOperator] = useState<string>('')
  const [calculated, setCalculated] = useState<boolean>(false)
  const [history, setHistory] = useState<string[]>(loadHistory)
  const [maxHistory, setMaxHistory] = useState<number>(10)

  function loadHistory(): string[] {
    const saved = localStorage.getItem('calculationHistory')
    return saved ? JSON.parse(saved) : []
  }

  function addToHistory(entry: string, maxHistory: number) {
    setHistory(prev => {
      const newHistory = [...prev, entry]
      if (newHistory.length > maxHistory) {
        return newHistory.slice(-maxHistory)
      }
      return newHistory
    })
  }


  function clearHistory() {
    setHistory([])
  }

  useEffect(() => {
    localStorage.setItem('calculationHistory', JSON.stringify(history))
  }, [history])

  function handleNumber(n: string) {
    if (calculated) { // New calculation after result
      setDisplay(n)
      setCalculated(false)
      setFirstOperand(n)
      setSecondOperand('')
      setOperator('')
      return
    }

    if (operator === '') { // First operand
      const updatedFirst =  firstOperand + n
      setFirstOperand(updatedFirst)
      setDisplay(updatedFirst)
    } else { // Second operand
      const updatedSecond = secondOperand + n
      setSecondOperand(updatedSecond)
      setDisplay(firstOperand + operator + updatedSecond)
    }
  }

  function handleDot() {
    if (operator === "") {
      if (!firstOperand.includes(".")) {
        const updatedFirst = firstOperand ? firstOperand + "." : "0."
        setFirstOperand(updatedFirst)
        setDisplay(updatedFirst)
      }
    } else {
      if (!secondOperand.includes(".")) {
        const updatedSecond = secondOperand ? secondOperand + "." : "0."
        setSecondOperand(updatedSecond)
        setDisplay(firstOperand + operator + updatedSecond)
      }
    }
  }

  function handleOperator(op: string) {
    if (firstOperand === "") return

    if (["sin", "cos", "tan", "√"].includes(op)) {
      const a = Number(firstOperand)
      const result = calculate(a, 0, op)
      const entry = `${op}(${a}) =\n${result}`

      addToHistory(entry, maxHistory)
      setDisplay(entry)
      setCalculated(true)

      return
    }

    setOperator(op)
    setDisplay(firstOperand + op)
    setCalculated(false)
  }

  function handleEquals() {
    if (!firstOperand || !operator || !secondOperand) return

    const a = Number(firstOperand)
    const b = Number(secondOperand)
    const result = calculate(a, b, operator)

    const expression = `${a} ${operator} ${b} =\n${result}`
    setDisplay(expression)

    addToHistory(expression, maxHistory)

    // Reset for next input
    setFirstOperand('')
    setSecondOperand('')
    setOperator('')
    setCalculated(true)
  }

  function handleClear() {
    setDisplay('0')
    setFirstOperand('')
    setSecondOperand('')
    setOperator('')
    setCalculated(false)
  }

  return (
    <div className='body'>
      <Container className='container'>
        <h1>Simple Calculator </h1>
        <p>This is an exercise for Browser Platform (Selainalusta) course. <br />
        Currently, the calculator can perform simple calculations with only one or two numbers.</p>
        <p>History uses localStorage and remains between browser sessions.</p>
        
        <CalculatorUI
        history={history}
        clearHistory={clearHistory}
        display={display}
        onNumber={handleNumber}
        onDot={handleDot}
        onOperator={handleOperator}
        onEquals={handleEquals}
        onClear={handleClear}
        maxHistoryLength={maxHistory}
        onMaxHistoryChange={setMaxHistory}
      />   

      <p>Author: Kaisa Juhola</p>
      </Container>
    </div>
  )
}