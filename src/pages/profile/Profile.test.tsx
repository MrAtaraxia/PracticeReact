import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import ProfilePage from './Profile';

describe('The ProfilePage Tests:', () => {
    it('Should display "ProfilePage"', () => {
        const { getByText } = render(
            <Provider store={store}>
                <ProfilePage />
            </Provider>
        );

        expect(getByText(/Profile Page!/i)).toBeInTheDocument();
    });
});
