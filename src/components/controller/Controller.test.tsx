import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Controller from './Controller';

describe('The Controller Tests:', () => {
    it('Should display "Controller"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Controller>abc</Controller>
            </Provider>
        );

        expect(getByText(/Controller/i)).toBeInTheDocument();
    });
});
