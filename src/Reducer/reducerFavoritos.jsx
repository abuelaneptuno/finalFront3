export function reducerFavoritos(state, action) {
  switch (action.type) {
    case "NUEVO_FAV": {
      return [...state, action.payload];
    }
    default: {
      throw new Error();
    }
  }
}