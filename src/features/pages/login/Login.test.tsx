import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import LoginPage from './Login';

describe('The LoginPage Tests:', () => {
    it('Should display "LoginPage"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        );

        expect(getByText(/Login Page!/i)).toBeInTheDocument();
    });
});
