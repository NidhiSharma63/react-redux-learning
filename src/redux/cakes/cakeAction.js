
import { Buy_Cakes,ADD_CAKES } from "./cakesType";

// action-creater

export const buyCakes = () =>{
  return{
    type:Buy_Cakes
  }
};

export const addCakes = (quantity) =>{
  return{
    type:ADD_CAKES,
    payload:quantity
  }
}
