import { nextCollection } from "../data-service/data.json";

const collectionReducer = (state = nextCollection) => {
  console.log(state);
  return state;
};

export default collectionReducer;
