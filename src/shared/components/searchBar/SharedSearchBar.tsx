import React from 'react';
import SearchBar from "material-ui-search-bar";
import PropTypes from 'prop-types'
// *snip*

const SharedSearchBar = (props: any) => {
    const { value, onChange, onSearch } = props

    return (
        <SearchBar
            style={{height: '55px'}}
            value={value}
            onChange={(newValue) => onChange(newValue)}
            onRequestSearch={() => onSearch()}
        />
    );
}

SharedSearchBar.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func
};

export default SharedSearchBar;