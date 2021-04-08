import { useContext } from "react";
import { MessageContext } from ".";

const useMessageContext = () => {
    return useContext(MessageContext);
}

export const useMessage = () => {
    const {
        state: { message },
        setMessage
    } = useMessageContext();
    return [message, setMessage];
}