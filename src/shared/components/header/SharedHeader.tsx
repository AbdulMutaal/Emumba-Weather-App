import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types'

const SharedHeader = (props: any) => {
  const { style, headerText, buttonText, buttonOnClick, iconButton } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {iconButton && <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>}
          {headerText && <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} data-testid="headerHeading">
            {headerText}
          </Typography>}
          {buttonText && <Button onClick={buttonOnClick} color="inherit">{buttonText}</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

SharedHeader.propTypes = {
  style: PropTypes.object,
  headerText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonOnClick: PropTypes.func,
  iconButton: PropTypes.bool
};

export default SharedHeader;
