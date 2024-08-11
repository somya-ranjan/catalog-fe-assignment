import React, { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Chart from "react-apexcharts";
import { chartTabsData, chartDataByTab, chartOptions } from "./data";

function CompareChart({ open, close }) {
  const [selectedRanges, setSelectedRanges] = useState({
    range1: "1w",
    range2: "1m",
  });

  const handleRangeChange = (name, value) => {
    setSelectedRanges((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const chartSeries1 = [
    {
      name: `${selectedRanges.range1.toUpperCase()} USD`,
      data: chartDataByTab[selectedRanges.range1],
    },
  ];

  const chartSeries2 = [
    {
      name: `${selectedRanges.range2.toUpperCase()} USD`,
      data: chartDataByTab[selectedRanges.range2],
    },
  ];

  return (
    <Dialog open={open} size="xl" handler={close} className="p-0">
      <DialogHeader className="justify-between">
        <h1 className="text-sm sm:text-2xl">
          Compare Charts {selectedRanges.range1} Vs {selectedRanges.range2}
        </h1>
        <IconButton color="blue-gray" size="sm" variant="text" onClick={close}>
          <XMarkIcon className="w-5 h-5" />
        </IconButton>
      </DialogHeader>
      <DialogBody className="h-[80vh] md:h-auto overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <Select
            name="range1"
            value={selectedRanges.range1}
            onChange={(value) => handleRangeChange("range1", value)}
            label="Select Range"
          >
            {chartTabsData
              ?.filter(({ value }) => value !== selectedRanges.range2)
              .map(({ label, value }) => (
                <Option key={value} value={value} className="mb-1">
                  {label}
                </Option>
              ))}
          </Select>
          <Select
            name="range2"
            value={selectedRanges.range2}
            onChange={(value) => handleRangeChange("range2", value)}
            label="Select Range"
          >
            {chartTabsData
              ?.filter(({ value }) => value !== selectedRanges.range1)
              ?.map(({ label, value }) => (
                <Option key={value} value={value} className="mb-1">
                  {label}
                </Option>
              ))}
          </Select>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <Chart
            options={chartOptions}
            series={chartSeries1}
            type="area"
            height={450}
            className="w-full shadow-md"
          />
          <Chart
            options={chartOptions}
            series={chartSeries2}
            type="area"
            height={450}
            className="w-full shadow-md"
          />
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default CompareChart;
