import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Feed from './Feed';

describe('The Feed Page Tests:', () => {
    it('Should display "Feed"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Feed />
            </Provider>
        );

        expect(getByText(/Feed Page!/i)).toBeInTheDocument();
    });
});
