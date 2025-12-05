import { Button, Typography } from '@mui/material'

interface ButtonProps {
    num?: number
    onClick?: () => void
    operator?: string
}

function NumberButton({ num, onClick }: ButtonProps) {
    return (
        <Button variant='contained' sx={{ bgcolor: '#99bfc6', color: '#fff', padding: 2, radius: 3 }} onClick={onClick}>
            <Typography sx={{ color: '#fff'}}>{num}</Typography>
        </Button>
    )
}

function EqualsButton({onClick}: ButtonProps) {
    return (
        <Button variant='contained' sx={{ bgcolor: '#f28c8c', color: '#fff', padding: 2, radius: 3, width: '100%' }} onClick={onClick}>
            <Typography sx={{ color: '#fff'}}>=</Typography>
        </Button>
    )
}

function OperatorButton({ operator, onClick }: ButtonProps) {
    return (
        <Button variant='contained' sx={{ bgcolor: '#f2a365', color: '#fff', padding: 2, radius: 3 }} onClick={onClick}>  
            <Typography sx={{ color: '#fff'}}>{operator}</Typography>
        </Button>
    )
}

function DotButton({onClick}: ButtonProps) {
    return (
        <Button variant='contained' sx={{ bgcolor: '#99bfc6', color: '#fff', padding: 2, radius: 3 }} onClick={onClick}>
            <Typography sx={{ color: '#fff'}}>.</Typography>
        </Button>
    )
}

function ClearHistoryButton( { onClick }: ButtonProps) {
    return (
        <Button variant='contained' sx={{ width: '100%', bgcolor: '#99bfc6', color: '#fff', radius: 3 }} onClick={onClick}>
            Clear History
        </Button>
    )
}

export { NumberButton, EqualsButton, OperatorButton, DotButton, ClearHistoryButton }