import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RoutesFetch } from "../config/Routes";
import { showWorldChart } from "../actions/showWorldChart";
import { showIndiaChart } from "../actions/showIndiaChart";
import { worldApiData } from "../actions/worldApiData";
import { indiaApiData } from "../actions/indiaApiData";

import WorldChart from "./WorldChart";
import IndiaChart from "./IndiaChart";

function ChartBtn() {
  const worldChartState = useSelector((state) => state.showWorldChart);
  const IndiaChartState = useSelector((state) => state.showIndiaChart);
  const worldApiState = useSelector((state) => state.worldApiData);
  const indiaApiState = useSelector((state) => state.indiaApiData);

  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const worldData = () => {
    // eslint-disable-next-line no-unused-expressions
    worldApiState === null
      ? RoutesFetch(
          "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {
            setError(false);
            dispatch(worldApiData(response));
          })
          .catch(() => {
            setError(true);
          })
      : null;

    dispatch(showWorldChart(!worldChartState));
  };

  const indiaData = () => {
    // eslint-disable-next-line no-unused-expressions
    indiaApiState === null
      ? RoutesFetch(
          "https://api.apify.com/v2/datasets/58a4VXwBBF0HtxuQa/items?format=json&clean=1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {
            setError(false);
            dispatch(indiaApiData(response));
          })
          .catch(() => {
            setError(true);
          })
      : null;

    dispatch(showIndiaChart(!IndiaChartState));
  };

  return (
    <div>
      {error === true ? (
        <div className="alert alert-warning" role="alert">
          Something went wrong! Please retry.
        </div>
      ) : null}

      <div className="m-5 text-center">
        <button
          type="button"
          className="btn btn-info text-light"
          onClick={worldData}
        >
          World Covid-19 Report
        </button>
      </div>

      <WorldChart />

      <div className=" m-5 text-center">
        <button
          type="button"
          className="btn btn-info text-light"
          onClick={indiaData}
        >
          India Covid-19 Report
        </button>
      </div>

      <IndiaChart />
    </div>
  );
}

export default ChartBtn;
