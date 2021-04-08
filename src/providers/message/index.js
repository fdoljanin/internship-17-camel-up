import React, { createContext, useState } from "react";

const initialState = {
    message: null
}

export const MessageContext = createContext({
    state: { ...initialState },
    setMessage: () => { }
});

const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState();

    const value = {
        state: { message },
        setMessage
    }

    return (
        <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
    );
}

export default MessageProvider;