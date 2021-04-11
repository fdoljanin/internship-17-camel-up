import { useContext } from "react";
import { MessageContext } from ".";

const useMessageContext = () => {
  return useContext(MessageContext);
};

export const usePopMessage = () => {
  const {
    state: {
      messages: { 0: message },
    },
    popMessage,
  } = useMessageContext();
  return [message, popMessage];
};

export const useSetMessage = () => {
  const { setMessageInQueue } = useMessageContext();
  return setMessageInQueue;
};
