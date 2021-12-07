import User, { DefaultUser } from "../../user/model/User";

type Meeting = {
    id: number;
    organizer: User;
    attending: User[];
    created: number;
    occurring: number;
    title: string;
    message: string;
}

const DefaultMeeting: Meeting = {
    id: 0,
    organizer: DefaultUser,
    attending: [],
    created: Date.now(),
    occurring: Date.now(),
    title: "",
    message: ""
}

export default Meeting
export { DefaultMeeting }
