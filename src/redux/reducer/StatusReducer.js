const initalState = {
  status:'NOT_DEFINED',
  name:'default'
}

const statusReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'UP':
      return {...state, status:'UP'}
    case 'DOWN':
      return {...state, status:'DOWN'}
    default:
      return state;
  }
}

export default statusReducer