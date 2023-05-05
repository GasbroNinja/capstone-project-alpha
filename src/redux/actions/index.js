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
