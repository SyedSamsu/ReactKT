import { ERROR_GETALL, LOADING_GETALL, SUCCESS_GETALL } from "../action/ActionTypes";

const initalState = {
  books: [],
  loading: true,
  error: {
    status: false,
    message: "",
  },
};

const allBookReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOADING_GETALL:
      return {
        ...state,
        loading: true,
        error: { ...state.error, status: false, message: "" },
      };
    case SUCCESS_GETALL:
      return {
        ...state,
        loading: false,
        books: action.payload,
        error: { ...state.error, status: false, message: "" },
      };
    case ERROR_GETALL:
      return {
        ...state,
        loading: false,
        books: [],
        error: { ...state.error, status: true, message: action.payload },
      };
    default:
      return state;
  }
};

export default allBookReducer;
