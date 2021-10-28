import './App.css';
import React from "react";
import DeviceInfo from "./components/DeviceInfo/DeviceInfo";
import UnitName from "./components/UnitName/UnitName";
import ReportFilters from "./components/ReportFilters/ReportFilters";
import ReportContainer from "./components/Report/ReportContainer";
import FilterDevicesContainer from "./components/FilterDevices/FilterDevicesContainer";

class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <div className="filterDevices">
                    <FilterDevicesContainer/>
                </div>
                <div className="unitName">
                    <UnitName/>
                </div>
                <div className="reportFilters">
                    <ReportFilters/>
                </div>
                <div className="deviceInfo">
                    <DeviceInfo/>
                </div>
                <div className="report">
                        <ReportContainer/>
                </div>
            </div>
        );
    }
}

export default App;
