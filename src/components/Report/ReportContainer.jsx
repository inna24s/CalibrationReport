import React from 'react';
import Report from "./Report";
import {connect} from "react-redux";

let mapStateToProps =(state) => {
    return{
        reportData: state.reportPath.reportData
    }
}


export default connect(mapStateToProps,{})(Report);