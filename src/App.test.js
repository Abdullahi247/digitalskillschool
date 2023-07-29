import App from "./App";
import React from "react";
import { render, getByText } from '@testing-library/react';

test('renders ExampleComponent with the correct text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText('Hello, World!');
    expect(textElement).toBeInTheDocument();
});