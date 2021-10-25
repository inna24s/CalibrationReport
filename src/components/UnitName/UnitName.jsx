import React from 'react';
import s from "./UnitName.module.css"

const UnitName = (props) => {
    return(
        <div className={s.div1}>
            <img alt="scale" className={s.img1} src="scale.svg" />
            <span className="title">
					Аналитические весы OHAUS Adventurer АХ324
 (B715976163)
				</span>
        </div>
    );
}

export default UnitName;