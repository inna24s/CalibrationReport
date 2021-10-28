import React from 'react';
import s from "../css/UnitName.module.css"

const UnitName = (props) => {
    return (
        <div>
            <img alt="scale" className={s.scale} src="scale.jpg"/>
                 <div className={s.text}>
                     Аналитические весы OHAUS Adventurer АХ324 (B715976163)
                </div>
        </div>
    );
}

export default UnitName;