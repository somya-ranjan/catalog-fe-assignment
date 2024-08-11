import React from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Chart from "react-apexcharts";
import { chartOptions } from "./data";

function FullScreenChart({ open, close, chartData, activeTab }) {
  const chartSeries = [
    {
      name: "USD",
      data: chartData,
    },
  ];

  return (
    <Dialog open={open} size="xxl" handler={close}>
      <DialogHeader className="justify-between">
        <h1 className="text-sm sm:text-2xl">
          Full Screen Chart Of {activeTab}
        </h1>
        <IconButton color="blue-gray" size="sm" variant="text" onClick={close}>
          <XMarkIcon className="w-5 h-5" />
        </IconButton>
      </DialogHeader>
      <DialogBody className="flex-1 overflow-hidden">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height="100%"
          width="100%"
        />
      </DialogBody>
    </Dialog>
  );
}

export default FullScreenChart;
