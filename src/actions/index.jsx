export const updatingTables = (user) => {
    return {
        type: 'ADD',
        payload: user
    }
}

export const finishOrder = (order) => {
    return {
        type: 'FINISH',
        payload: order
    }
}
