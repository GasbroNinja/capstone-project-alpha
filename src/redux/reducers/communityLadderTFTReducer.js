import { GET_LADDER_TFT } from "../actions"

const initialstate = {
  content: []
};

const LadderTFTStorage = (state = initialstate, action) => {
  switch (action.type) {
    case GET_LADDER_TFT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default LadderTFTStorage;