import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'

const SharedButton = (props: any) => {
    const { type, text, onClick } = props
    return (
        <Button variant={type} onClick={onClick}>{text}</Button>
    );
}

SharedButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default SharedButton;