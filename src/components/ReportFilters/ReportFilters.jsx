import React from 'react';
import s from "./ReportFilters.module.css"

const ReportFilters = (props) => {
    return(
        <div className={s.div6}>
            <div className={s.div1}>
                <select name="month" required>
                    <option value="1month"> 1 month</option>
                    <option value="2month"> 2 month</option>
                    <option value="3month"> 3 month</option>
                    <option value="4month"> 4 month</option>
                </select>
            </div>
            <div>
                <input type="radio" name="repFilters" value="calibration" required/>
                <label> Calibration</label>
            </div>
            <div>
                <input type="radio" name="repFilters" value="measuring" required/>
                <label> Measuring</label>
            </div>
            <div>
                <input type="radio" name="repFilters" value="using" required/>
                <label> Using</label>
            </div>
            <div className={s.div5}>
					<button className={s.body2mobile}>
						Generate report
					</button>
            </div>
        </div>
    );
}

export default ReportFilters;
