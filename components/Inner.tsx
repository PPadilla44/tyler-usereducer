import React, { useContext } from 'react'
import { Store } from '../utils/Store';


const Inner = () => {

    const { state, dispatch  } = useContext(Store);

    const handleClick = () => {

        dispatch({ type: 'SHOW', payload: {
            show: true,
            content: "THIS IS INNTER"
        } })
        
    }

    return (
        <button onClick={handleClick}>
            SHOW MODAL
        </button>
    )
}

export default Inner