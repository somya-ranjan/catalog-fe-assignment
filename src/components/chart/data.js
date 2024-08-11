const chartTabsData = [
  { label: "1d", value: "1d" },
  { label: "3d", value: "3d" },
  { label: "1w", value: "1w" },
  { label: "1m", value: "1m" },
  { label: "6m", value: "6m" },
  { label: "1y", value: "1y" },
  { label: "max", value: "max" },
];

const chartDataByTab = {
  "1d": [
    61, 62, 63, 64, 65, 66, 67, 65, 66, 67, 65, 66, 67, 68, 69, 70, 68, 69, 70,
    71, 72, 73, 74, 75,
  ],
  "3d": [
    60, 62, 64, 63, 65, 66, 68, 65, 67, 69, 68, 70, 72, 69, 71, 73, 74, 75, 77,
    78, 76, 78, 79, 80,
  ],
  "1w": [
    59, 60, 62, 64, 66, 68, 70, 67, 69, 71, 72, 74, 76, 74, 76, 78, 79, 80, 81,
    82, 80, 82, 83, 85,
  ],
  "1m": [
    55, 57, 60, 62, 64, 65, 67, 65, 68, 70, 71, 73, 75, 72, 74, 76, 78, 79, 81,
    83, 81, 84, 85, 87,
  ],
  "6m": [
    50, 53, 55, 57, 60, 63, 65, 63, 65, 67, 69, 71, 74, 70, 73, 75, 77, 79, 81,
    83, 80, 83, 85, 87,
  ],
  "1y": [
    45, 48, 50, 53, 55, 57, 60, 58, 60, 63, 65, 67, 70, 65, 68, 70, 72, 75, 78,
    80, 78, 80, 82, 85,
  ],
  max: [
    40, 42, 45, 48, 50, 52, 55, 52, 54, 57, 59, 62, 65, 62, 65, 67, 69, 72, 75,
    77, 75, 77, 79, 82,
  ],
};

const chartOptions = {
  chart: {
    id: "basic-line",
    toolbar: {
      show: false,
    },
  },
  colors: ["#4b40ee"],
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid: { show: false },
  stroke: { curve: "straight", width: 2 },
  tooltip: { enabled: true, theme: "dark" },
  dataLabels: { enabled: false },

  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.7,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
};

export { chartTabsData, chartDataByTab, chartOptions };
