
import {connect} from "react-redux";
import FilterDevices from "./FilterDevices";
import {updateInputValue} from "../../Redux/filterDevices-reducer";


let mapStateToProps = (state)=>{
    return{
        inputVal:state.filterDevicesPath.inputVal
    }
}
export default connect(mapStateToProps,{updateInputValue})(FilterDevices);