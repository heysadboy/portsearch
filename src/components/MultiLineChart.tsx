import React, { FC, useEffect, useState } from "react";
import * as d3 from "d3";
import { EStatusType, ILineData } from "../types";
import Status from "./Status";

interface IMultiLineChartProp {
    data: ILineData[],
    domain: any
}

const MultiLineChart: FC<IMultiLineChartProp> = ({ data, domain }) => {
    const [isNoData, setIsNoData] = useState(false);

    useEffect(() => {
        d3.select("#chart").selectAll("*").remove();
        let noDataFlag = 0;

        if (data.length > 0 && data[0]) {
            let margin = { top: 2, right: 30, bottom: 30, left: 60 },
                width = 800 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            let svg = d3.select("#chart").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            // Adding X axis
            let x = d3.scaleTime()
                .domain(d3.extent(data[0].values, (d: any) => { return d.day; }) as Iterable<Date>)
                .range([0, width]);
            let xAxisGroup = svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).ticks(5));

            xAxisGroup.select(".domain").remove();
            xAxisGroup.selectAll("line").remove();

            // Adding Y axis
            let y = d3.scaleLinear()
                .domain([0, domain.yMaxValue + 1000] as Iterable<number>)
                .range([height, 0]);
            let yAxisGroup = svg.append("g")
                .call(d3.axisLeft(y).tickSizeInner(-width));

            yAxisGroup.select(".domain").remove();
            yAxisGroup.selectAll("line").attr("stroke", "rgba(0, 0, 0, 0.2)");

            // Adding lines
            svg.selectAll(".line")
                .data(data)
                .enter()
                .append("path")
                .attr("fill", "none")
                .attr("stroke", (d) => { return d.color })
                .attr("stroke-width", 1.5)
                .attr("d", (d: any) => {
                    return d3.line()
                        .x((d: any) => { return x(d.day); })
                        .y((d: any) => {
                            noDataFlag += y(+d.value); //Check if there are no values at all
                            return y(+d.value);
                        })
                        .defined((d: any) => { return d.value; }) // Omit empty values.
                        (d.values)
                });

            if (noDataFlag === 0) {
                setIsNoData(true);
            }
        }
    }, [data, domain.yMaxValue])

    //If all values are null then line can not be generated so show appropriate message.
    return (
        <React.Fragment>
            {isNoData ? <Status status={EStatusType.no_data} /> : <div id="chart"></div>}
        </React.Fragment>
    );
};

export default MultiLineChart;