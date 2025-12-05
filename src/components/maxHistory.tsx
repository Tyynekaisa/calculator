import { MenuItem, FormControl, InputLabel, Select } from '@mui/material'
import type { SelectChangeEvent } from '@mui/material/Select';

type MaxHistoryProps = {
    maxHistoryLength: number
    onMaxHistoryChange: (max: number) => void
}

export default function MaxHistory({ maxHistoryLength, onMaxHistoryChange }: MaxHistoryProps) {

    const handleChange = (event: SelectChangeEvent) => {
        const maxValue: number = parseInt(event.target.value, 10)
        onMaxHistoryChange(maxValue)
    }
    
    
    return (
        <FormControl fullWidth>
            <InputLabel id="max-history-label">Max History</InputLabel>
            <Select
                labelId="max-history-label"
                id="max-history-select"
                value={String(maxHistoryLength)}
                label="Max History"
                onChange={handleChange}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
            </Select>
        </FormControl>
    )
}