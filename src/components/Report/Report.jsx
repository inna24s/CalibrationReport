import React from 'react';
import s from "../css/Report.module.css"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

const dataFormatter = (cell) => {
    let mas, result = "";
    mas = cell.split('\n');
    for (let i = 0; i < mas.length; i++)
        result += mas[i] + `<div style="line-height: 1.3"/>`;
    result += `<br/>`;
    return result;
}
const dataFormatter1 = (cell) => {
    let result = "";
    if (cell[1] === true)
        result += cell[0] + `<img style="padding-left: 20px;" src="images/success.svg" alt="success"/>`;
    else result += cell[0] + `<img style="padding-left: 20px;" src="images/error1.svg" alt="error"/>`
    return result;
}
const Report = (props) => {
    return (
        <div className={s.report_add}>
            <span className={s.calibrationReport}>
					Calibration report
				</span>
            <BootstrapTable data={props.reportData} height='200'>
                <TableHeaderColumn isKey dataField="data" dataFormat={dataFormatter}
                                   tdStyle={{lineHeight: 1.9, fontSize: 16, width: 120}}>
                    Data
                </TableHeaderColumn>
                <TableHeaderColumn dataField='buf_solutions' dataFormat={dataFormatter}
                                   tdStyle={{fontSize: 13, lineHeight: 1.3, width: 240}}>
                    Used buffer solutions
                </TableHeaderColumn>
                <TableHeaderColumn dataField="slope" dataFormat={dataFormatter1}
                                   tdStyle={{fontSize: 13, lineHeight: 1.5, width: 110}}>
                    Slope, %<br/>
                    Norm 95-105
                </TableHeaderColumn>
                <TableHeaderColumn dataField="offset" dataFormat={dataFormatter1}
                                   tdStyle={{fontSize: 13, lineHeight: 1.5, width: 110}}>
                    Offset, mV<br/>
                    Norm ±(0-20)
                </TableHeaderColumn>
                <TableHeaderColumn dataField="user" tdStyle={{fontSize: 12, lineHeight: 1.4, width: 240}}>
                    User
                </TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
}

export default Report;