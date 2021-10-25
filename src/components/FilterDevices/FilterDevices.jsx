import s from "./FilterDevices.module.css"
import React from "react";

const FilterDevices = (props) => {
    return (
        <div className={s.div4}>
				<span className={s.subheadingMobile}>
					Enter inventory number, guid or bims id
				</span>
            <div className={s.div3}>

                <input className={s.div1} value="A-001234"/>
                <div>
                    <button className={s.div2}>
                        <span className={s.body2mobile}>Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterDevices;