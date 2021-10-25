import './App.css';
import SearchDevice from "./components/FilterDevices/FilterDevices";
import React from "react";
import DeviceInfo from "./components/DeviceInfo/DeviceInfo";
import UnitName from "./components/UnitName/UnitName";
import ReportFilters from "./components/ReportFilters/ReportFilters";
import ReportContainer from "./components/Report/ReportContainer";


function App() {
    return (
        <div className="app-wrapper">
            <div className="searchDevice">
                <SearchDevice/>
            </div>
            <div className="unitName">
                <UnitName />
            </div>
            <div className="reportFilters">
                <ReportFilters/>
            </div>
            <div className="deviceInformation">
                <DeviceInfo/>
            </div>
            <div className="report">
                <ReportContainer />
            </div>

        </div>
    );
}

export default App;
