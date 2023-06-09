import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions/actions'
import Filter from '../pure/Filter'
import { useDispatch, useSelector } from 'react-redux';


const FilterContainer = ({ filter, children }) => {
    const active = useSelector(state => filter === state.filterState);
    const dispatch = useDispatch();
  
    const onClick = () => {
      dispatch(setVisibilityFilter(filter));
    };
  
    return (
      <Filter active={active} onClick={onClick}>
        {children}
      </Filter>
    );
  };
  
  export default FilterContainer;