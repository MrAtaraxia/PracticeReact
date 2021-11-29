// /* eslint-disable import/no-anonymous-default-export */
// export default {
//     get: jest.fn().mockResolvedValue( { data: {} } )
// };

import { AxiosStatic } from "axios"

// src/__mocks__/axios.ts
const mockAxios = jest.genMockFromModule<AxiosStatic>( 'axios' )

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn( () => mockAxios )

export default mockAxios