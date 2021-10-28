import React from 'react';
import s from "../css/ReportFilters.module.css"

const ReportFilters = (props) => {
    return (
        <form action="#" className={s.reportFilters_add}>
            <select name="month" required>
                <option value="1month"> 1 month</option>
                <option value="2month"> 2 month</option>
                <option value="3month"> 3 month</option>
            </select>
            <div className={s.radioInputs}>
                <div>
                    <input id="Calibration" type="radio" name="repFilters" value="calibration" defaultChecked required/>
                    <label htmlFor="Calibration"> Calibration</label>
                </div>
                <div>
                    <input id="Measuring" type="radio" name="repFilters" value="measuring" required/>
                    <label htmlFor="Measuring"> Measuring</label>
                </div>
                <div>
                    <input id="Using" type="radio" name="repFilters" value="using" required/>
                    <label htmlFor="Using"> Using</label>
                </div>
            </div>
            <button type="submit" className={s.important}>
						Generate report
            </button>
        </form>
    );
}

export default ReportFilters;
