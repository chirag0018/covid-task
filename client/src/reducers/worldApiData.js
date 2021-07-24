const worldApiData = (state = null, action) => {
  switch (action.type) {
    case "worldApiData":
      return action.payload;

    default:
      return state;
  }
};

export default worldApiData;
