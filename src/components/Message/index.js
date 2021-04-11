import { usePopMessage } from "../../providers/message/hooks";
import {Popup, MessageOverlay} from "./index.styled";

const Message = () => {
    const [message, popMessage] = usePopMessage();

    if (!message) {
        return null;
    }

    return (
        <MessageOverlay>
            <Popup>
                <h2>{message.title}</h2>
                {message.content}
                <button onClick={() => popMessage()}>OK</button>
            </Popup>
        </MessageOverlay>
    )
}

export default Message;