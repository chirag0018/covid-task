const showWorldChart = (state = false, action) => {
  switch (action.type) {
    case "worldChart":
      return action.payload;

    default:
      return state;
  }
};

export default showWorldChart;
