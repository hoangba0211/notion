import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import axios from "axios";

const DoughnutChart = (props) => {
  console.log(props.sumExBoard);
  console.log(props.sumReBoard);
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Revenue", "Expenditure"],
          datasets: [
            {
              label: "My First Dataset",
              data: [props.sumReBoard, props.sumExBoard],
              backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
              // hoverOffset: 4,
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
        }}
        width={447}
        height={330}
      />
    </div>
  );
};

export default DoughnutChart;
