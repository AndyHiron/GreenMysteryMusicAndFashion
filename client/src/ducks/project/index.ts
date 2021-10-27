const initialState: any = {
  data: undefined
};

export default (state = initialState, action: any): any => {
  switch (action.type) {
    case 'project/GET':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

