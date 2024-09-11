import React from 'react';
import { ReactSVG } from 'react-svg';
import FilterIconSVG from '../svg/FilterIcon.svg';

const FilterIcon = (props) => (
    <ReactSVG src={FilterIconSVG} {...props} />
);

export default FilterIcon;