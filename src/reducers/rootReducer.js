import cardReducer from "./cardReducer";
import ownerReducer from "./ownerReducer";
import sponsorReducer from "./sponsorReducer";
import collectionReducer from "./collectionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  card: cardReducer,
  owner: ownerReducer,
  sponsors: sponsorReducer,
  nextCollection: collectionReducer
});

export default rootReducer;
