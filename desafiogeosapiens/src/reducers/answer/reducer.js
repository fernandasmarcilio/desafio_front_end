export const INITIAL_STATE = {
  answers: null,
  formStructure: null,
  loading: true,
  openModal: false,
  answerDetails: null,
};

export const ACTIONS = {
  setAnswers: '@FORM/SET_ANSWERS',
  setFormStructure: '@FORM/SET_FORM_STRUCTURE ',
  isLoaded: '@FORM/IS_LOADED',
  openModal: '@FORM/OPEN_MODAL',
  setAnswersDetails: '@FORM/SET_ANSWERS_DETAILS'
};

export const answerReducer = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case ACTIONS.setAnswers:
      return {
        ...state,
        answers: action.payload
      }
    case ACTIONS.setFormStructure:
      return {
        ...state,
        formStructure: action.payload,
      }
    case ACTIONS.isLoaded:
      return {
        ...state,
        loading: false
      }
    case ACTIONS.openModal:
      return {
        ...state,
        openModal: !state.openModal
      }
    case ACTIONS.setAnswersDetails:
      return {
        ...state,
        answerDetails: action.payload,
      }
    default:
      return state
  }
}