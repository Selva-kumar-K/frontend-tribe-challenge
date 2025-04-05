import React from "react";
import HomeControls from "./components/HomeControls";
import DogImage from "./components/DogImage";
import DashboardNavigation from "./components/DashboardNavigation";
import MediaTabs from "./components/MediaTabs";
import EnergyConsumption from "./components/EnergyConsumption";

export default function App() {
  return (
    <div className="app">
      {/* <HomeControls/> */}
      {/* <DogImage /> */}
      {/* <DashboardNavigation /> */}
      {/* <MediaTabs /> */}
      <EnergyConsumption />
    </div>
  );
}
