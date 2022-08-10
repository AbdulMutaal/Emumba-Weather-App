import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'

const TodayForecast = (props: any) => {
    const { locationName } = props

    return(
        <Box>
            <h1>Today's Forecast for {locationName}</h1>

            <Grid container spacing={1} style={{marginTop: '10px'}}>      
                <Grid item xs={8}>
                    <p>Current Temperature Weather Condition Highest and Lowed Temp.</p>
                </Grid>

                <Grid item xs={4}>
                    <p>Weather Icon</p>
                </Grid>
            </Grid>
        </Box>
    )
}

TodayForecast.propTypes = {
    locationName: PropTypes.string
};

export default TodayForecast;