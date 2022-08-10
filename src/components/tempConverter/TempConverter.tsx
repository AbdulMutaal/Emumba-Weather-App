import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SharedButton from '../../shared/components/button/SharedButton';

const TempConverter = () => {
    return(
        <Box>
            <h1>Temp Converter</h1>
                    
            <Grid container 
                spacing={1} 
                style={{marginTop: '10px'}} 
                justifyContent="center" 
                alignItems="center"
            >
                <SharedButton
                    type="outlined"
                    text="Celsius"
                />      
                
                <SyncAltIcon/>

                <SharedButton
                    type="outlined"
                    text="Fahrenheit"
                />
            </Grid>

        </Box>
    )
}

export default TempConverter;