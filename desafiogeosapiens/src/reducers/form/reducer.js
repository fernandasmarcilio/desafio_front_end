export const INITIAL_STATE = {
  formStructure: null,
  loading: true,
  formData: null
};

export const ACTIONS = {
  setFormStructure: '@FORM/SET_FORM_STRUCTURE',
  setFormData: '@FORM/SET_FORM_DATA ',
};

export const formReducer = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case ACTIONS.setFormStructure:
      return {
        ...state,
        formStructure: action.payload,
        loading: false,
      }
    case ACTIONS.setFormData:
      const {id, value} = action.payload;
      return {
        ...state,
        formData: {
          ...state.formData,
          [id]: value,
        }
    }
    default:
      return state
  }
}