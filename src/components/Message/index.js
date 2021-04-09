import { useMessage } from "../../providers/message/hooks";
import {Popup, MessageOverlay} from "./index.styled";

const Message = () => {
    const [message, setMessage] = useMessage();

    if (!message) {
        return null;
    }

    return (
        <MessageOverlay>
            <Popup>
                <h2>{message.title}</h2>
                {message.content}
                <button onClick={() => setMessage(null)}>OK</button>
            </Popup>
        </MessageOverlay>
    )
}

export default Message;