const showIndiaChart = (state = false, action) => {
  switch (action.type) {
    case "indiaChart":
      return action.payload;

    default:
      return state;
  }
};

export default showIndiaChart;
