import React, { FC } from "react";
import * as d3 from "d3";
import { ILineData } from "../types";

interface IMultiLineChartProp {
    data: ILineData[]
}
const MultiLineChart: FC<IMultiLineChartProp> = ({ data }) => {

    console.log(data);
    return (<div>Chart</div>)
};

export default MultiLineChart;