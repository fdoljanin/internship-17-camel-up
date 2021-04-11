import React, { createContext, useState } from "react";

const initialState = {
    message: []
}

export const MessageContext = createContext({
    state: { ...initialState },
    setMessageInQueue: () => { },
    popMessage: () => {}
});

const MessageProvider = ({ children }) => {
    const [messages, setMessages] = useState(initialState.message);

    const setMessageInQueue = (message) => {
        setMessages(prev => [...prev, message]);
    }

    const popMessage = () => {
        setMessages( prev => {
            const copy = [...prev];
            copy.splice(0,1);
            return copy;
        })
    }

    const value = {
        state: { messages },
        setMessageInQueue,
        popMessage
    }

    return (
        <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
    );
}

export default MessageProvider;