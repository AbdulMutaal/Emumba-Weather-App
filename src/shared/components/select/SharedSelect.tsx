import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types'

const SharedSelect = (props: any) => {
    const { label, value, onChange, items } = props;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={onChange}
            >
                {items && items.map((item: any) => {
                    return <MenuItem value={item}>{item}</MenuItem>
                })}
            </Select>
            </FormControl>
        </Box>
  );
}

SharedSelect.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired
};

export default SharedSelect;
