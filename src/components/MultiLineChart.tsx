import { FC, useEffect } from "react";
import * as d3 from "d3";
import { ILineData } from "../types";

interface IMultiLineChartProp {
    data: ILineData[],
    domain: any
}

const MultiLineChart: FC<IMultiLineChartProp> = ({ data, domain }) => {
    
    useEffect(() => {
        d3.select("#chart").selectAll("*").remove();

        if (data.length > 0 && data[0]) {
            console.log(data);

            var margin = { top: 2, right: 30, bottom: 30, left: 60 },
                width = 800 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            var svg = d3.select("#chart").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

            // Adding X axis
            var x = d3.scaleTime()
                .domain(d3.extent(data[0].values, function (d: any) { return d.day; }) as Iterable<Date>)
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).ticks(5));


            // Adding Y axis
            var y = d3.scaleLinear()
                .domain([0, domain.yMaxValue + 1000] as Iterable<number>)
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));

            // Adding lines
            svg.selectAll(".line")
                .data(data)
                .enter()
                .append("path")
                .attr("fill", "none")
                .attr("stroke", function (d) { return d.color })
                .attr("stroke-width", 1.5)
                .attr("d", function (d: any) {
                    return d3.line()
                        .x(function (d: any) { return x(d.day); })
                        .y(function (d: any) { return y(+d.value); })
                        (d.values)
                })

        }
    }, [data, domain.yMaxValue])

    return (<div id="chart"></div>)
};

export default MultiLineChart;