import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {Login} from '../../../src/pages/Auth/Login';

describe('page login testing', () => {
    test('Header login correctly', () => {
        const { getByText } = render(<Login />)
        const textHeader = getByText('I have a acount login')
        expect(textHeader).toBeTruthy()
    })
})