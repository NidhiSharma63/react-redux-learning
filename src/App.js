
const BUY_CAKE= "BUY_CAKE";

// action-creator
const buyCake = () =>{
  return{
    type:BUY_CAKE,
    info:"we can add extra info here(optional)"
  }
}

// Initial state

const initialState={  
  noOfCake:10
}


function App() {

  const reducers = (state=initialState,action)=>{
    switch(action.type){
      case BUY_CAKE: return{
        ...state, /* make a copy of STATE and update the define property */
        noOfCake:state.noOfCake-1
      }
      default: return state
    }
  }


  return;
}

export default App;
