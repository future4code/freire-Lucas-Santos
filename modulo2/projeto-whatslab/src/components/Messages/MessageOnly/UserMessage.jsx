import './UserMessage.css';

export const UserMessage = ({user, time, message}) => {
    return (
        <div className="message-box">
            <div className="message-box-header">
                <h1>{user}</h1>
                <h2>{time}</h2>
            </div>

            <div className="message-box-body">
                <p>{message}</p>
            </div>
        </div>
    );
}