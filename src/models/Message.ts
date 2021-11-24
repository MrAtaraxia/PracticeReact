import User, { DefaultUser } from "./User";

type Message = {
    id: number;
    fromUser: User;
    toUser: User;
    sent: number;
    message: string;
}

const DefaultMessage: Message = {
    id: 0,
    fromUser: DefaultUser,
    toUser: DefaultUser,
    sent: Date.now(),
    message: ""
}

export { DefaultMessage };
export default Message;
