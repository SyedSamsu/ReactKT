const initalState = 0

const counterReducer = (state = initalState,action) => {
    switch(action.type){
      case 'INCREMENT':
        console.log("REDUCER INCREMENt");
        return state + action.payload;
      case 'DECREMENT':
        console.log("REDUCER INCREMENt");
        return state - action.payload;
      default:
        return state;
    }

}

export default counterReducer