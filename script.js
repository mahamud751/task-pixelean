var options = {
  series: [
    {
      name: "Crane 1",
      data: [150, 380, 328, 571, 400, 490, 160],
    },
    {
      name: "Crane 2",
      data: [250, 680, 328, 571, 400, 490, 160],
    },
    {
      name: "Crane 3",
      data: [650, 180, 728, 371, 600, 690, 360],
    },
    {
      name: "Crane 4",
      data: [450, 680, 228, 671, 500, 690, 860],
    },
  ],
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "right",
  },
  chart: {
    height: 180,
    type: "area",
    offsetX: 0,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    lineCap: "butt",
    // colors: "red",
    width: 2,
    dashArray: 0,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
    axisBorder: {
      show: false,
    },
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },

  fill: {
    colors: ["#7DCB5E"],
  },

  yaxis: {
    min: 0,
    max: 1000,
    tickAmount: 5,
    labels: {
      formatter: function (val) {
        return val.toFixed(0);
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#90A4AE",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
