
export const deposit = (amount) => ({
    type: 'DEPOSIT',
    amount: parseInt(amount)
});

export const widthdraw = (amount) => ({
    type: 'WITHDRAW',
    amount: parseInt(amount)
});

export const collectInterest = () => {
    return {
        type: 'COLLECT_INTEREST'
    }
}

export const deleteAccount = () => ({
    type: 'DELETE_ACCOUNT'
})