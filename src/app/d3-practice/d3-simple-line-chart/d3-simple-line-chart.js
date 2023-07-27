let h = 400;
let w = 700;
const monthlySales = [
  {
    month: 10,
    sales: 20,
  },
  {
    month: 20,
    sales: 14,
  },
  {
    month: 30,
    sales: 20,
  },
  {
    month: 40,
    sales: 21,
  },
  {
    month: 50,
    sales: 15,
  },
  {
    month: 60,
    sales: 22,
  },
  {
    month: 70,
    sales: 42,
  },
  {
    month: 80,
    sales: 9,
  },
  {
    month: 90,
    sales: 6,
  },
  {
    month: 100,
    sales: 200,
  },
];

const lineFunc = d3
  .line()
  .x(function (d) {
    return d.month * 5;
  })
  .y(function (d) {
    return h - d.sales;
  })
  .curve(d3.curveLinear);

let svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

lineFunc(monthlySales);

let viz = svg
  .append("path")
  .attr("d", lineFunc(monthlySales))
  .attr("stroke", "purple")
  .attr("stroke-width", "2")
  .attr("fill", "none");

//add labels
let labels = svg
  .selectAll("text")
  .data(monthlySales)
  .enter()
  .append("text")
  .text(function (d) {
    return d.sales;
  })
  .attr("y", function (d) {
    return h - d.sales;
  })
  .attr("x", function (d) {
    return d.month * 5 - 20;
  })
  .attr("font-size", "20px")
  .attr("font-family", "sans-serif")
  .attr("fill", "#666666")
  .attr("text-anchor", "start")
  .attr("dy", ".35em")
  .attr("font-weight", function (d, i) {
    if (i === 0 || i === monthlySales.length - 1) {
      return "bold";
    } else {
      return "normal";
    }
  });
