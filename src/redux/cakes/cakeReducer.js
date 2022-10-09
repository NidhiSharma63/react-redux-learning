import {Buy_Cakes} from './cakesType'

const initialState = {
  numOfCakes:10,
  msg:'We have enough cake you can buy'
}

const reducer = (state=initialState,action) =>{
  switch(action.type){
    case Buy_Cakes:{
      if(state.numOfCakes<=5){
       return{
        ...state,
        msg:"You can't but the cake ask vendor to add the stoke of the cake"
       }
      }
      if(state.numOfCakes>5){
        return{
          ...state,
          numOfCakes:state.numOfCakes-1,
        }
      }
    }
    default: return state
  }
}
export default reducer;