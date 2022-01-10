import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../../../components/PageHeader';

const Header = ({ title, icon }) => {
    return <PageHeader title={title} icon={icon} />;
};

Header.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    onSearch: PropTypes.func,
    onClick: PropTypes.func
};

export default Header;
