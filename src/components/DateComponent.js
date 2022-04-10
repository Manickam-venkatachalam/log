import React from "react";
import TextField from '@mui/material/TextField';

const DateComponent= ({
    label=""
})=>{
    
    return (
        <div>
            <TextField
            id="datetime-local"
            label={label}
            type="datetime-local"
            defaultValue= ""
            sx={{ width: 250 }}
            InputLabelProps={{
            shrink: true,
        }}
      />
        </div>
    )
}
export default DateComponent;