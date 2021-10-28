const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE";
let initialState = {
    inputVal:"A-00123"
};
const filterDevicesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_INPUT_VALUE: return {...state, inputVal: action.inputVal}
        default: return state;
    }
}

export const updateInputValue = (inputVal) =>({type:UPDATE_INPUT_VALUE, inputVal})

export default filterDevicesReducer;