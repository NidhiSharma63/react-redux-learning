const initialState = {
  numOfCakes:10
}

const reducer = (state=initialState,action) =>{
  switch(action.type){
    case "Buy_Cakes":{
      return{
        ...state,
        numOfCakes:state.numOfCakes-1,
      }
    }
    default: return state
  }
}
export default reducer;