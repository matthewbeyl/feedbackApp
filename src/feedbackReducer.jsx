const initialState = {
    feedback: {
        id: '',
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
        flagged: '',
        date: ''
    }
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
        return {
            ...state,
            feedback: [ 
                action.payload
            ]
        };
        case 'ADD_UNDERSTANDING':
        return {
            ...state,
            feedback: [
                action.payload
            ]
        };
        case 'ADD_SUPPORT':
        return {
            ...state,
            feedback: [
                action.payload
            ]
        };
        case 'ADD_COMMENTS':
        return {
            ...state,
            feedback: [
                action.payload
            ]
        };
        default:
            return state;
    }
}

export default feedbackReducer;