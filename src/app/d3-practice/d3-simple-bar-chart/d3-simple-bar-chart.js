let w = 400;
let h = 400;
let padding = 2;
let dataset = [5, 10, 15, 20, 25, 11, 22, 32, 14, 15];
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", 1920)
  .attr("width", 1080);

function colorPicker(v) {
  if (v <= 20) {
    return "#666666";
  } else if (v > 20) {
    return "#fff033";
  }
}

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return (i * w) / dataset.length;
  })
  .attr("y", function (d) {
    return h - d * 5;
  })
  .attr("width", w / dataset.length - padding)
  .attr("height", function (d) {
    return d * 5;
  })
  .attr("fill", function (d) {
    return colorPicker(d);
  });

svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("text-anchor", "middle")
  .attr("x", function (d, i) {
    return i * (w / dataset.length) + (w / dataset.length - padding) / 2;
  })
  .attr("y", function (d) {
    return h - d * 5 + 14;
  })
  .attr("font-family", "sans-serif")
  .attr("fill", "#ffffff");
