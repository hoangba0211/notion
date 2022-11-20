import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import axios from "axios";
const LineChart = (props) => {
  const [sumReMonth, setSumReMonth] = useState([]);
  const [sumExMonth, setSumExMoth] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/month`)
      .then((res) => {
        setSumReMonth(res.data[0].revenue)
        console.log(res.data)
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.clear();
        }
      });
  },[])
  return (
    <div>
      <Line     
        labels="Chart Line"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],

          datasets: [
            {
              id: 1,
              label: "Revenue",
              data: [
                NaN, 
                NaN, 
                NaN, 
                NaN, 
                NaN, 
                NaN, 
                NaN, 
                NaN, 
                NaN,
                sumReMonth,
                NaN,
                NaN,
                NaN
              ],
              borderColor: "#eb2e04",
              backgroundColor: "#eb2e04",
            },
            {
              id: 2,
              label: "Expenditure",
              data: [10, 3, 4, 6, 15,NaN, NaN, NaN, NaN, NaN,NaN,NaN],
              borderColor: "#0499eb",
              backgroundColor: "#0499eb",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            filler: {
              propagate: false,
            },
            title: {
              display: true,
              text: "Chart",
            },
          },
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true,
          //         },
          //       },
          //     ],
          //   },
        }}
        width={819}
        height={350}
      />
    </div>
  );
};

export default LineChart;
