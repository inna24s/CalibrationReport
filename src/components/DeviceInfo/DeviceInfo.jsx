import React from 'react';
import s from "./DeviceInfo.module.css";
const DeviceInfo = (props) => {
    return(
        <div className={s.div1}>
				<span className={s.span1}>
					<p>Тип оборудования: Весы</p>
					<p>Статус: Готов к работе</p>
					<p>Изготовитель: Ohaus</p>
					<p>Модель: AX-123</p>
					<p>Ответственное подразделение (ремонт): Группа обслуживания лабораторного оборудования</p>
					<p>Эксплуатирующее подразделение: Химико-аналитическая лаборатория 2.0</p>
					<p>МОЛ: Иванов Иван Иванович</p>
					<p>Территория: г. Санкт-Петербург (Нойдорф)</p>
					<p>Серийный номер: B715976163</p>
					<p>GUID: 508b2a71-662e-4983-ae0c-3cb0c1cd21c5</p>
					<p>Bims ID: 49db8db1-585f-4b9e-bbf0-8a59698edc8b</p>
					<p>Tam:  А-001234</p>
				</span>
        </div>
    );
}

export default DeviceInfo;
