import { GET_CARDS } from "../actions";


const initialstate = {
  content: null
};

const cardsStorage = (state = initialstate, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};


export default cardsStorage;