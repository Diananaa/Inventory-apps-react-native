// __tests__/Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../../../src/Button'; // Komponen yang akan diuji

describe('Button component', () => {
    test('Button renders correctly', () => {
        const { getByText } = render(<Button label="Press me" />);
        const buttonElement = getByText('Press me');
        expect(buttonElement).toBeTruthy();
    });

    test('Button click event works correctly', () => {
        const onPressMock = jest.fn(); // Membuat mock function untuk onPress event
        const { getByText } = render(<Button label="Press me" onPress={onPressMock} />);
        const buttonElement = getByText('Press me');
        fireEvent.press(buttonElement); // Memanggil event press pada tombol

        expect(onPressMock).toHaveBeenCalled(); // Memastikan bahwa onPress telah dipanggil
    });
    
});
