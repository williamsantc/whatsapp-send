import { forwardRef } from 'react'
import TextField from '@mui/material/TextField'

export const PhoneNumberInput = forwardRef((props, ref) => {
    return (
        <TextField
            {...props}
            inputRef={ref}
            fullWidth
            size='small'
            label='Phone Number'
            variant='outlined'
            name='phone'
        />
    )
})
