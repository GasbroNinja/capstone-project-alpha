import { GET_LADDER_HEARTHSTONE } from "../actions";


const initialstate = {
  content: []
};

const LadderHSStorage = (state = initialstate, action) => {
  switch (action.type) {
    case GET_LADDER_HEARTHSTONE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};




export default LadderHSStorage;
