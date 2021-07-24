const indiaApiData = (state = null, action) => {
  switch (action.type) {
    case "indiaApiData":
      return action.payload;

    default:
      return state;
  }
};

export default indiaApiData;
