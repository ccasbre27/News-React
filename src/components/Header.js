import React from 'react';

const Header = ({title}) => (
    <nav className="nav-wraper light-blue darken-3">
        <a className="brand-logo center">{title}</a>
    </nav>
);

export default Header;