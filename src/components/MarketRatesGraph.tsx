import React, { FC, useEffect, useState } from "react";
import { IGraphData, ILineData, IMarketRate, IPointData } from "../types";
import * as d3 from "d3";
import DateRange from "./DateRange";
import MarketPosition from "./MarketPosition";
import MultiLineChart from "./MultiLineChart";
import DataPointLabel from "./DataPointsLabel";

interface IMarketRatesGraphProps {
  data: IMarketRate[]
}

const MarketRatesGraph: FC<IMarketRatesGraphProps> = ({ data }) => {

  const [selectedPositions, setSelectedPositions] = useState<string[]>(["average"]);
  const [graphData, setGraphData] = useState<IGraphData>({});
  const [multiLineData, setMultiLineData] = useState<ILineData[]>([]);

  useEffect(() => {
    const marketLow: ILineData = { name: "low", color: "blue", values: [] };
    const marketAvg: ILineData = { name: "average", color: "red", values: [] }
    const marketHigh: ILineData = { name: "high", color: "green", values: [] };

    data.forEach((item) => {
      const lowObj: IPointData = {
        day: item.day,
        value: item.low
      }

      const avgObj: IPointData = {
        day: item.day,
        value: item.mean
      }

      const highObj: IPointData = {
        day: item.day,
        value: item.high
      }

      marketLow.values.push(lowObj);
      marketAvg.values.push(avgObj);
      marketHigh.values.push(highObj);
    });

    setGraphData({ "low": marketLow, "average": marketAvg, "high": marketHigh })
  }, [data]);

  useEffect(() => {
    const tempData: ILineData[] = [];
    selectedPositions.forEach((position) => {
      tempData.push(graphData[position])
    });

    setMultiLineData(tempData);
  }, [graphData, selectedPositions]);

  const xMinValue: any = d3.min(data, d => d.day);
  const xMaxValue: any = d3.max(data, d => d.day);

  return (
    <div id="graph-container">
      <DateRange startDate={xMinValue} endDate={xMaxValue} />
      <div className="ui grid">
        <div className="twelve wide column">
          <div className="ui segment multi-line-chart-container">
            <MultiLineChart data={multiLineData} />
          </div>
        </div>
        <div className="four wide column">
          <DataPointLabel info={`${data.length} Data Points`} />
          <div className="ui segment market-position-container">
            <MarketPosition setSelectedPositions={setSelectedPositions} selectedPositions={selectedPositions} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketRatesGraph;