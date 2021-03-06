import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
    <nav className="nav-wraper light-blue darken-3">
        <a className="brand-logo center">{title}</a>
    </nav>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;