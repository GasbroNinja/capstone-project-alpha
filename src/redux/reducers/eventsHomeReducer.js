import { GET_EVENTS } from "../actions";


const initialstate = {
  content: []
};

const eventsStorage = (state = initialstate, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};


export default eventsStorage;