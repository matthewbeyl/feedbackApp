const initialState = {
    feedback: {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
        flagged: '',
    }
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
        return {
            ...state.feedback,
            feeling: action.payload            
        };
        case 'ADD_UNDERSTANDING':
        return {
            ...state,
            ...state.feedback,
            understanding: action.payload
        };
        case 'ADD_SUPPORT':
        return {
            ...state,
            ...state.feedback,
            support: action.payload            
        };
        case 'ADD_COMMENTS':
        return {
            ...state,
            ...state.feedback,
            comments: action.payload
        };
        default:
            return state;
    }
}

export default feedbackReducer;