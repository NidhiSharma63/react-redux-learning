import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cakes/cakeReducer';


export default configureStore({
  reducer: {
    cake: cakeReducer
  }
})

