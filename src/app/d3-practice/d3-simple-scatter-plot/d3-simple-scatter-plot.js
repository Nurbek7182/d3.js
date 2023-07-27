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

//create our svg
let svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//KPI color
function salesKPI(d) {
  if (d >= 20) {
    return "#33CC66";
  } else if (d < 20) {
    return "#666666";
  }
}

//function that shows the minimum and maximum value
function showMinMax(ds, col, type, val) {
  let max = d3.max(ds, function (d) {
    return d[col];
  });
  let min = d3.min(ds, function (d) {
    return d[col];
  });

  if (type === "minmax" && (val === min || val === max)) {
    return val;
  } else {
    if (type === "all") {
      return val;
    }
  }
}

//add dots
let dots = svg
  .selectAll("circle")
  .data(monthlySales)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return d.month * 4;
  })
  .attr("cy", function (d) {
    return h - d.sales;
  })
  .attr("r", 5)
  .attr("fill", function (d) {
    return salesKPI(d.sales);
  });

//add labels
let labels = svg
  .selectAll("text")
  .data(monthlySales)
  .enter()
  .append("text")
  .text(function (d) {
    return showMinMax(monthlySales, "sales", "minmax", d.sales);
  })
  .attr("x", function (d) {
    return d.month * 4 - 20;
  })
  .attr("y", function (d) {
    return h - d.sales;
  })
  .attr("font-size", "18")
  .attr("font-family", "bold")
  .attr("fill", "#666666")
  .attr("text-anchor", "middle");
