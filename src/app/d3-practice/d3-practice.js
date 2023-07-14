import * as d3 from "d3";

let w = 500;
let h = 100;
let padding = 2;
let dataset = [5, 10, 15, 20, 25];
let svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("height", 100)
  .attr("width", 20);
