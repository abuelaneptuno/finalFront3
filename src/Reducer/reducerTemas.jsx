export const reducerTemas = (state, action) => {
    switch (action.type) {
      case "LIGHT":
        return { ...state, color: "light" };
      case "DARK":
        return { ...state, color: "dark" };
      default: {
        return { ...state, color: "light" };
      }
    }
  };