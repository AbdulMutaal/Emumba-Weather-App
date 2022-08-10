import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types'

import SharedSlides from '../../../shared/components/slides/SharedSlides';
import WeatherCard from './weatherCard/WeatherCard';

const WeeklyForecast = (props: any) => {
    const { locationName } = props

    return(
        <Box>
            <h1>Today's Forecast for {locationName}</h1>

            <SharedSlides>
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </SharedSlides>
            
        </Box>
    )
}

WeeklyForecast.propTypes = {
    locationName: PropTypes.string
};

export default WeeklyForecast;