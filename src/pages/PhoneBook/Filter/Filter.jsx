import React from 'react';
import { filter } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={event => dispatch(filter(event.target.value))}
      />
    </div>
  );
}
