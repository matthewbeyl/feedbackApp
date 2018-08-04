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
        case 'ADD_TO_FEEDBACK':
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

// const order = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_PIZZA_TO_ORDER':
//         return { 
//             ...state,
//             pizzas: [
//                 ...state.pizzas, action.payload
//             ],
//             order_total: state.order_total + action.payload.cost 
//         };
//         case 'REMOVE_PIZZA_FROM_ORDER':
//             const pizzaMatch = pizza => pizza._id !== action.payload._id;
//             return {...state, pizzas:state.pizzas.filter(pizzaMatch)};
//         case 'ADD_CUSTOMER_INFO':
//             return { ...state, customer: action.payload, type: action.orderType };
//         case 'CLEAR_ORDER':
//             state = initialState;
//             return state;
//         default:
//             return state;
//     }
// }

export default feedbackReducer;