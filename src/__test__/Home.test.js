import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home component testing', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
