import { render, screen } from '@testing-library/react'; // Import functions from the testing library
import App from './App'; // Import the component you want to test (in this case, 'App')

test('renders learn react link', () => {
  render(<App />); // Render the 'App' component
  const linkElement = screen.getByText(/learn react/i); // Find an element with text that matches the regex 'learn react' case-insensitively
  expect(linkElement).toBeInTheDocument(); // Assert that the element is present in the rendered component
});
