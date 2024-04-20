const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["CSK","MI" ,"RR", "Deccan", "KKR", "SRH", "GT"],
    datasets: [
      {
        data: [5,5 , 1, 1, 2, 1, 1],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
});

const ctx2 = document.getElementById("orangeCap");

new Chart(ctx2, {
    data: {
        labels: [
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
        ],
        datasets: [
            {
                type: "line",
                label: "spike line",
        data: [
          616, 572, 618, 608, 733, 733, 660, 562, 973, 641, 735, 692, 670, 635, 863,
          890,
        ],
      },
      {
        type: "bar",
        label: "score",
        data: [
          616, 572, 618, 608, 733, 733, 660, 562, 973, 641, 735, 692, 670, 635, 863,
          890,
        ],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
});

const ctx3 = document.getElementById("purpleCap");

new Chart(ctx3, {
  data: {
    labels: [
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
    ],
    datasets: [
      {
            type: "line",
            label: "wickets",
        data: [22, 23, 21, 28, 25, 32, 23, 26, 23, 26, 24, 26, 30, 32, 27,28],
      },
     
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
});
