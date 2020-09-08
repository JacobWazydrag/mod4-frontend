const initState= {
    notes: [
        {id: 1, title: 'Test 1', description: 'Description Test 1', user_id: 1},
        {id: 2, title: 'Test 2', description: 'Description Test 2', user_id: 2},
        {id: 3, title: 'Test 3', description: 'Description Test 3', user_id: 3}
    ]
}
    
const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            console.log('created note', action.note)
    }
return state
}

export default noteReducer;