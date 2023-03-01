var options = {
  series: [
    {
      name: "Bob",
      data: [
        {
          x: "Ne 1",
          y: [
            new Date("2019-03-05").getTime(),
            new Date("2019-03-08").getTime(),
          ],
        },
        {
          x: "Ne 2",
          y: [
            new Date("2019-03-08").getTime(),
            new Date("2019-03-11").getTime(),
          ],
        },
        {
          x: "Ne 3",
          y: [
            new Date("2019-03-11").getTime(),
            new Date("2019-03-16").getTime(),
          ],
        },
        {
          x: "Ne 4",
          y: [
            new Date("2019-03-11").getTime(),
            new Date("2019-03-16").getTime(),
          ],
        },
      ],
    },
  ],
  chart: {
    height: 240,
    type: "rangeBar",
    toolbar: {
      show: false,
    },
    offsetX: 0,
    stacked: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,

    formatter: function (val) {},

    style: {
      fontSize: "14px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: undefined,
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#fff",
      opacity: 0.9,
    },
  },
  //   dataLabels: {
  //     enabled: true,
  //     formatter: function (val) {
  //       var a = moment(val[0]);
  //       var b = moment(val[1]);
  //       var diff = b.diff(a, "days");
  //       return diff + (diff > 1 ? " days" : " day");
  //     },
  //   },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    categories: ["Category 1", "Category 2"],
  },
  legend: {
    position: "top",
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

// Create the chart
var chart = new ApexCharts(document.querySelector("#chart2"), options);

// Render the chart
chart.render();
