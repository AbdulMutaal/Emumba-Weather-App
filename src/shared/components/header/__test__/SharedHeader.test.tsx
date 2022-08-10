import React from 'react';
import { render, screen } from '@testing-library/react';
import SharedHeader from '../SharedHeader';

it('should render same text passed into headerText prop', () => {
    render(<SharedHeader headerText="The Weather App" />);
    const linkElement = screen.getByTestId("headerHeading", { name: "The Weather App" });
    expect(linkElement).toBeInTheDocument();
});


it('should render same text passed into headerText prop', () => {
    render(<SharedHeader headerText="The Weather App" />);
    const linkElement = screen.getByText(/the weather app/i);
    expect(linkElement).toBeInTheDocument();
});