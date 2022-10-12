const initialState = {
    names: [],
    filterBy: {
        name: '',
        minPrice: '',
        labels: []
    },
    name: {},
    loader: true,
}

export function nameReducer(state = initialState, action) {
    var names, name
    switch (action.type) {

        case 'SET_nameS':
            return { ...state, names: action.names }

        case 'UPDATE_name':
            names = state.names.map(currname => (currname._id === action.name._id) ? action.name : currname)
            return { ...state, names }

        case 'ADD_name':
            names = [...state.names, action.name]
            return { ...state, names }

        case 'REMOVE_name':
            names = state.names.filter(name => name._id !== action.nameId)
            return { ...state, names }

        case 'SET_FILTER':
            return { ...state, filterBy: { ...state.filterBy, ...action.filterBy } }

        case 'SET_name':
            return { ...state, name: action.name }

        case 'SET_LOADER':
            return { ...state, loader: action.loader }

        case 'ADD_MSG':
            name = { ...state.name, msgs: [...state.name.msgs, action.msg] }
            return { ...state, name }

        default:
            return state
    }
}