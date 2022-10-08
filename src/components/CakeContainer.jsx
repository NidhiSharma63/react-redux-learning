import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const CakeContainer = () => {
  const cakes = useSelector(state => state.cake.numOfCakes);
  console.log(cakes)
  return (
    <div>
      <h1>Number Of Cakes-{cakes}</h1>
      <button>Buy Cakes</button>
    </div>
  )
}

export default CakeContainer;