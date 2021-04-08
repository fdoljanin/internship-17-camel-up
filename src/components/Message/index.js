import { useMessage } from "../../providers/message/hooks";

const Message = () => {
    const [message, setMessage] = useMessage();

    if (!message) {
        return null;
    }

    return (
        <div>
            {message}
            <button onClick={() => setMessage(null)}>OK</button>
        </div>
    )
}

export default Message;