import { FC, useEffect, useState } from "react";
import { EStatusType, IGraphData, ILineData, IMarketRate, IPointData } from "../types";
import * as d3 from "d3";
import DateRange from "./DateRange";
import MarketPosition from "./MarketPosition";
import MultiLineChart from "./MultiLineChart";
import DataPointLabel from "./DataPointsLabel";
import { connect } from "react-redux";
import Status from "./Status";

interface IMarketRatesGraphProps {
  data: IMarketRate[],
}

const MarketRatesGraph: FC<IMarketRatesGraphProps> = ({ data }) => {

  const [selectedPositions, setSelectedPositions] = useState<string[]>(["average"]);
  const [graphData, setGraphData] = useState<IGraphData>({});
  const [multiLineData, setMultiLineData] = useState<ILineData[]>([]);

  useEffect(() => {
    const marketLow: ILineData = { name: "low", color: "#D50000", values: [] };
    const marketAvg: ILineData = { name: "average", color: "#AA00FF", values: [] }
    const marketHigh: ILineData = { name: "high", color: "#2962FF", values: [] };

    data.forEach((item) => {
      const lowObj: IPointData = {
        day: d3.timeParse("%Y-%m-%d")(item.day),
        value: item.low
      }

      const avgObj: IPointData = {
        day: d3.timeParse("%Y-%m-%d")(item.day),
        value: item.mean
      }

      const highObj: IPointData = {
        day: d3.timeParse("%Y-%m-%d")(item.day),
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

  const domain = {
    xMinValue: d3.min(data, d => d.day),
    xMaxValue: d3.max(data, d => d.day),
    yMinValue: d3.min(data, d => d.low),
    yMaxValue: d3.max(data, d => d.high)
  }

  return (
    <div id="graph-container">
      <DateRange startDate={domain.xMinValue} endDate={domain.xMaxValue} />
      <div className="ui stackable two column grid">
        <div className="sixteen wide tablet thirteen wide computer column">
          {selectedPositions.length > 0 ? <MultiLineChart data={multiLineData} domain={domain} /> : <Status status={EStatusType.no_position_selected} />}
        </div>
        <div className="sixteen wide tablet three wide computer column">
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