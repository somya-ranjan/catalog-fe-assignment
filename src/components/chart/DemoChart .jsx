import React, { useState } from "react";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import {
  ArrowsPointingOutIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { chartTabsData, chartDataByTab, chartOptions } from "./data";
import FullScreenChart from "./FullScreenChart";
import CompareChart from "./CompareChart";

function DemoChart() {
  const [activeTab, setActiveTab] = useState("1w");
  const [fullScreenChart, setFullScreenChart] = useState({
    open: false,
    data: chartDataByTab["1w"],
  });
  const [compareChart, setCompareChart] = useState(false);

  const chartSeries = [
    {
      name: "USD",
      data: chartDataByTab[activeTab],
    },
  ];

  return (
    <>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row lg:gap-x-10 gap-y-5">
          <div className="flex gap-10">
            <p
              className="icon_container"
              onClick={() =>
                setFullScreenChart({
                  open: true,
                  data: chartDataByTab[activeTab],
                })
              }
            >
              <ArrowsPointingOutIcon className="icon" />
              <b>Fullscreen</b>
            </p>
            <p className="icon_container" onClick={() => setCompareChart(true)}>
              <PlusCircleIcon className="icon" />
              <b>Compare</b>
            </p>
          </div>
          <Tabs value={activeTab} className="md:ms-auto overflow-x-auto">
            <TabsHeader
              className="rounded-none bg-transparent gap-5"
              indicatorProps={{
                className: "bg-primary",
              }}
            >
              {chartTabsData?.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={`w-fit px-3 ${
                    activeTab === value ? "text-white" : ""
                  }`}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>

        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={420}
        />
      </div>

      <FullScreenChart
        open={fullScreenChart?.open}
        close={() => setFullScreenChart({ open: false })}
        chartData={fullScreenChart.data}
        activeTab={activeTab}
      />
      <CompareChart open={compareChart} close={() => setCompareChart(false)} />
    </>
  );
}

export default DemoChart;
