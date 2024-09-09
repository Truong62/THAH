import React from 'react';
import { ReactSVG } from 'react-svg';
import SearchBarIconSVG from '../svg/SearchBarIcon.svg';

const SearchBarIcon = (props) => (
    <ReactSVG src={SearchBarIconSVG} {...props} />
);

export default SearchBarIcon;