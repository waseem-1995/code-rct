import * as types from "./actionTypes"

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  activePage: 1,
  perPage: 5,
};

const reducer = (state=initialState, action) => {
  const{type, payload} = action;
  switch(type) {
    case types.APP_LOADING:
      return {...state, isLoading:true }
      case types.APP_ERROR:
        return {...state, isLoading:false, isError:true}
        case types.GET_POSTS:
          return {...state, isLoading:false, posts:payload};
          case types.ADD_POST:
            return {...state, isLoading:false, posts:[payload,...state.posts]}
            case types.TOGGLE_LIKE:
              return {...state, isLoading:false,posts:state.posts.map((el)=>el.id === payload.id ? payload : el) }
    default:
      return state;
  }
}

export { reducer };
