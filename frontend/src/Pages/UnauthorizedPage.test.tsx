import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Unauthorized from '../UnauthorizedPage';

// Step 3: Mock the useNavigate hook
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('UnauthorizedPage', () => {
  // Step 4: Test that the component renders
  it('should render the unauthorized access message', () => {
    render(<Unauthorized />);
    const unauthorizedMessage = screen.getByText(/Unauthorized Access/i);
    expect(unauthorizedMessage).toBeInTheDocument();
  });

  // Step 5: Test the button click
  it('should navigate to the homepage when the button is clicked', () => {
    render(<Unauthorized />);
    const button = screen.getByRole('button', { name: /Go to Homepage/i });
    fireEvent.click(button);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });
});
