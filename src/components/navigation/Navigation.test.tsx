import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Navigation from './Navigation';

describe('The Navigation Tests:', () => {
    it('Should display "Navigation"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Navigation />
            </Provider>
        );

        expect(getByText(/Navigation Page!/i)).toBeInTheDocument();
    });
});
