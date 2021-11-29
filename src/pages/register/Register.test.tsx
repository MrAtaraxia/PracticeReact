import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import RegisterPage from './Register';

describe('The RegisterPage Tests:', () => {
    it('Should display "RegisterPage"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <RegisterPage />
            </Provider>
        );

        expect(getByText(/Register Page!/i)).toBeInTheDocument();
    });
});
