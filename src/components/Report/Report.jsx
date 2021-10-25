import React from 'react';
import s from "./Report.module.css"
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table'

const Report = (props) => {
    return(
        <div className={s.div9}>
            <span className={s.span1}>
					Calibration report
				</span>
            <BootstrapTable data={props.reportData}>
                <TableHeaderColumn isKey dataField="data" width="100">
                   Data
                </TableHeaderColumn>
                <TableHeaderColumn dataField="buf_solutions" width="250">
                    Used buffer solutions
                </TableHeaderColumn>
                <TableHeaderColumn dataField="slope" width="150">
                    Slope, %
                    <p>Norm 95-105</p>
                </TableHeaderColumn>
                <TableHeaderColumn dataField="offset" width="150">
                    Offset, mV
                    <p>Norm ±(0-20)</p>
                </TableHeaderColumn>
                <TableHeaderColumn dataField="user" width="250">
                    User
                </TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
}

export default Report;