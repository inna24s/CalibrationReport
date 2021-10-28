import s from "../css/FilterDevices.module.css"
import React from "react";

const FilterDevices = (props) => {
    let onChange = (e) => {
        props.updateInputValue(e.target.value);
    }
    return (
        <div className={s.filterDevices_add}>
            <label className={s.subheadingMobile} htmlFor="inputDevice">Enter inventory number, guid or bims id </label>
                <input id="inputDevice"
                       className={s.inputText} type="search"
                       aria-label="Search through site content" required value={props.inputVal} onChange={onChange}/>
            <button className={s.body2mobile}>Search</button>
        </div>
    );
}

export default FilterDevices;