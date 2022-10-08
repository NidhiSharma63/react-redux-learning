import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// have to import action-creater so that we can return type and then
// cake reducer match the type and run the function 
import buyCakes from '../redux/cakes/cakeAction';

const CakeContainer = () => {
  const cakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch()
  console.log(cakes)
  return (
    <div>
      <h1>Number Of Cakes-{cakes}</h1>
      <button
        onClick={() => dispatch(buyCakes())}>
        Buy Cakes
      </button>
    </div>
  )
}

export default CakeContainer;