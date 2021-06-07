
const initialState = {
    balance: 0
}

export const bankingReducers = (state = initialState, action) => {
    switch(action.type) {

        case 'DEPOSIT':
            return {
                ...state,
                balance: state.balance + action.amount
            } 
        case 'WITHDRAW':
            return {
                ...state,
                balance: state.balance - action.amount
            }
        case 'COLLECT_INTEREST':

            return {
                balance: state.balance * 1.03
            }

        case 'DELETE_ACCOUNT':
            return {
                balance: state.balance = 0
            }

        default:
            return state;
    }
}