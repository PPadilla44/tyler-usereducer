import { createContext, useReducer } from "react";

const initialState = {
    show: false,
    content: ''
}

export const Store = createContext(initialState);

function reducer(state, action) {
    switch(action.type) {
        case 'SHOW':
            const { show, content } = action.payload;
            return { ...state, show, content };
        case 'CLOSE':
            return { ...state, show: false }
    }
}

export const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const value = { state, dispatch };

    return (
        <Store.Provider value={value} >
            {children}
        </Store.Provider>
    )
}