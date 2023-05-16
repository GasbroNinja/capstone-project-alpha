/*export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_ALBUM = "ADD_ALBUM";
export const IS_PLAY = "IS_PLAY";

export const addToFavouritesAction = song => ({ type: ADD_TO_FAVOURITES, payload: song });
export const removeFromFavouritesAction = song => ({ type: REMOVE_FROM_FAVOURITES, payload: song });
export const isPlayAction = song => ({ type: IS_PLAY, payload: song });

export const getAlbumsAction = query => {
  return async dispatch => {
    const baseEndpoint = "search?q=";
    try {
      const response = await fetch(baseEndpoint + query);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: ADD_ALBUM, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

*/
export const GET_CARDS = "GET_CARDS";

export const Types = {
  LOGIN: 'LOGIN',
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  UPDATE_PROFILE_PICTURE: 'UPDATE_PROFILE_PICTURE',
  FORM_SUBMITION_STATUS: 'FORM_SUBMITION_STATUS'
};

export const ActionCreators = {

  addProfile: (user) => ({ type: Types.ADD_USER, payload: { user } }),

  updateProfileImage: (image) => ({ type: Types.UPDATE_PROFILE_PICTURE, payload: { image } }),

  updateProfile: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

  formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status }}),

  login: (user) => ({ type: Types.LOGIN, payload: { user } })
}

export const getPostsHomeAction = () => {
    return async dispatch => {
    const baseEndpoint = "http://localhost:3001/cardshome"
    const HEADERS = {
        headers: {
           "Content-Type": "application/json; charset=utf-8",
        }

    }
        try{
            const response = await fetch(baseEndpoint, HEADERS)
            if(response.ok) {
            let arr = await response.json();         
            arr = arr.slice(0,3)
            dispatch({ type: GET_CARDS, payload: arr })
            } else {
                alert("Error fetching results");
            }

        } catch (error) {
            console.log(error);
        }


    };
};