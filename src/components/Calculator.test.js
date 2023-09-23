import renderer from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
  const { text } = Button.propTypes;
  const handleButtonClick = text;
  const tree = renderer
    .create(<Button text="+" styling="key1b" onClick={() => handleButtonClick()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
