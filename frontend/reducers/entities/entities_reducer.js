import { combineReducers } from "redux";

import likesReducer from './likes_reducer';
import usersReducer from "./users_reducer";
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  likes: likesReducer
});

export default entitiesReducer;
