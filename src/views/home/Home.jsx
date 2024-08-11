import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Header, DemoChart } from "../../components";

function Home() {
  // // local state
  const [activeTab, setActiveTab] = useState("chart");
  const tabsData = [
    {
      label: "Summary",
      value: "summary",
      comp: <h1 className="demo_tab_content">Summery Tab View.</h1>,
    },
    {
      label: "Chart",
      value: "chart",
      comp: <DemoChart />,
    },
    {
      label: "Statics",
      value: "statics",
      comp: <h1 className="demo_tab_content">Statics Tab View.</h1>,
    },
    {
      label: "Analytics",
      value: "analytics",
      comp: <h1 className="demo_tab_content">Analytic Tab View.</h1>,
    },
    {
      label: "Settings",
      value: "setting",
      comp: (
        <h1 className="text-center text-xl font-semibold">
          Settings Tab View.
        </h1>
      ),
    },
  ];

  return (
    <div className="container min-h-screen bg-white">
      <Header />
      <Tabs value={activeTab} className="mt-4">
        <TabsHeader
          className="rounded-none border-b border-gray-200 bg-transparent p-0 gap-2 md:gap-4 overflow-x-auto"
          indicatorProps={{
            className: "border-b-[3px] border-primary shadow-none rounded-none",
          }}
        >
          {tabsData?.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`w-fit pb-2 md:pb-3 px-5 ${
                activeTab === value ? "font-bold" : ""
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {tabsData.map(({ value, comp }) => (
            <TabPanel key={value} value={value}>
              {comp}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default Home;
