import React from 'react';
import s from "../css/DeviceInfo.module.css";

const DeviceInfo = (props) => {
    return (
        <div className={s.deviceInfo_add}>
					<ul>
						<li>Тип оборудования: <span className={s.black}>Весы</span></li>
						<li>Статус: <span className={s.black}>Готов к работе</span></li>
						<li>Изготовитель: <span className={s.black}>Ohaus</span></li>
						<li>Модель: <span className={s.black}>AX-123</span></li>
						<li>Ответственное подразделение (ремонт):
							<span className={s.black}>Группа обслуживания лабораторного оборудования</span></li>
						<li>Эксплуатирующее подразделение:
							<span className={s.black}>Химико-аналитическая лаборатория 2.0</span></li>
						<li>МОЛ: <span className={s.black}>Иванов Иван Иванович</span></li>
						<li>Территория: <span className={s.black}>г. Санкт-Петербург (Нойдорф)</span></li>
						<li>Серийный номер: <span className={s.black}>B715976163</span></li>
						<li>GUID: <span className={s.blue}>508b2a71-662e-4983-ae0c-3cb0c1cd21c5</span></li>
						<li>Bims ID: <span className={s.blue}>49db8db1-585f-4b9e-bbf0-8a59698edc8b</span></li>
						<li>Tam: <span className={s.blue}>А-001234</span></li>
					</ul>
        </div>
    );
}

export default DeviceInfo;
