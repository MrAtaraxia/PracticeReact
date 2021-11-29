import { DefaultGame } from "../../../models/Game";

const gameClient = {
    get: jest.fn( async () =>
        Promise.resolve( {
            data: DefaultGame
        } )
    )
};

export default gameClient;