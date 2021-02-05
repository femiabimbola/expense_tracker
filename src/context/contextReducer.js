const contextReducer = ( state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            const transactions = state.filter((t) => t.id !== action.payload)
            return transactions;
        case 'ADD_TRANSACTION':
            const tranactions = [action.payload, ...state];
            return transactions
        default:


            break;
    }
}

export default contextReducer;