import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import HomePage from './Home';

describe('The HomePage Tests:', () => {
    it('Should display "HomePage"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        expect(getByText(/Home Page!/i)).toBeInTheDocument();
    });
});
