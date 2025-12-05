import { Box} from '@mui/material'
import { NumberButton, EqualsButton, OperatorButton, DotButton, ClearHistoryButton } from './buttons'
import HistoryList from './historyList'
import MaxHistory from './maxHistory'

type CalculatorProps = {
  history: string[]
  clearHistory: () => void
  display: string
  onNumber: (n: string) => void
  onDot: () => void
  onOperator: (op: string) => void
  onEquals: () => void
  onClear: () => void
  maxHistoryLength: number
  onMaxHistoryChange: (max: number) => void
}

export default function CalculatorUI({ history, clearHistory, display, onNumber, onDot, onOperator, onEquals, onClear, maxHistoryLength, onMaxHistoryChange }: CalculatorProps) {
  return (
      <Box className='calculator-box' p={3} borderRadius={4} display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={3} width={700} mx="auto" my={2}>
        <Box className='calculator' width={314}>
          <Box p={1} border={1} borderRadius={4} height={150} sx={{ whiteSpace: "pre-wrap" }} className='display-box'>
            {display}
          </Box>

          <Box mt={2} display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={1} className='button-grid'>
            {/* Nappulat */}
            <OperatorButton operator="sin" onClick={() => onOperator("sin")}/>
            <OperatorButton operator="cos" onClick={() => onOperator("cos")}/>
            <OperatorButton operator="tan" onClick={() => onOperator("tan")}/>
            <OperatorButton operator="mod" onClick={() => onOperator("%")}/>
            <NumberButton num={7} onClick={() => onNumber('7')} />
            <NumberButton num={8} onClick={() => onNumber('8')}/>
            <NumberButton num={9} onClick={() => onNumber('9')}/>
            <OperatorButton operator="÷" onClick={() => onOperator("/")}/>
            <NumberButton num={4} onClick={() => onNumber('4')}/>
            <NumberButton num={5} onClick={() => onNumber('5')}/>
            <NumberButton num={6} onClick={() => onNumber('6')}/>
            <OperatorButton operator="*" onClick={() => onOperator("*")}/>
            <NumberButton num={1} onClick={() => onNumber('1')}/>
            <NumberButton num={2} onClick={() => onNumber('2')}/>
            <NumberButton num={3} onClick={() => onNumber('3')}/>
            <OperatorButton operator="-" onClick={() => onOperator("-")}/>
            <OperatorButton operator="C" onClick={(onClear)}/>
            <NumberButton num={0} onClick={() => onNumber('0')}/>
            <DotButton onClick={onDot}/>
            <OperatorButton operator="+" onClick={() => onOperator("+")}/>
          </Box>

          <Box mt={1} width="100%">
            <EqualsButton onClick={onEquals}/>
          </Box>
        </Box>

        <Box className='history-box' pt={1} pb={2} px={2} border={1} borderRadius={4} width={314} display="flex" flexDirection="column">
          <h2>
            History
          </h2>

          <Box flexGrow={1} overflow="auto" mb={2}>
            <HistoryList history={history} />
          </Box>

          <Box mb={1}>
            <MaxHistory
              maxHistoryLength={maxHistoryLength}
              onMaxHistoryChange={onMaxHistoryChange}
            />
          </Box>

          <Box>
            <ClearHistoryButton onClick={clearHistory} />
          </Box>
        </Box>
      </Box>
    )
}