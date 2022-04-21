import React, { useContext } from 'react'
import { Store } from '../utils/Store'

const Modal = () => {
    const { state, dispatch } = useContext(Store);

    if (state.show) {
        return (
            <div>
                <div>{state.content}</div>
                <button onClick={() => {
                    dispatch({ type: "CLOSE" })
                }} >close</button>
            </div>
        )
    }
}

export default Modal