import { DefaultGame } from "../../../components/game/model/Game";

const gameClient = {
    get: jest.fn( async () =>
        Promise.resolve( {
            data: DefaultGame
        } )
    )
};

export default gameClient;