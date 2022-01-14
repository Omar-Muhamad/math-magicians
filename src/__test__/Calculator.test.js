import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component testing', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('User interaction when clicking calculator buttons', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: /9/i }));
    const output = screen.getByTestId('output');
    expect(output.textContent).toBe('9');
  });
});
