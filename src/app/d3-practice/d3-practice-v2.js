const width = window.innerWidth;
const height = window.innerHeight;

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
document.body.appendChild(svg);

const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
mask.setAttribute("id", "circle-mask");
svg.appendChild(mask);

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

circle.setAttribute("r", 600);
circle.setAttribute("cx", width / 2);
circle.setAttribute("cy", height / 2);
circle.setAttribute("fill", "black");
mask.appendChild(circle);

let rectV = document.createElementNS("http://www.w3.org/2000/svg", "rect");

for (let i = 0; i < 20; i++) {
  rectV.setAttribute("x", i * 100);
  rectV.setAttribute("width", 10);
  rectV.setAttribute("height", height);
  rectV.setAttribute("fill", "black");
  svg.appendChild(rectV);
}

rectV.setAttribute("mask", "url(#circle-mask)");

const rectH = document.createElementNS("http://www.w3.org/2000/svg", "rect");
