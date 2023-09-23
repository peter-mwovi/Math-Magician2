import renderer from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
  const { text } = Button.propTypes;
  const { onClick } = Button.propTypes;
  const tree = renderer
    .create(
      <button type="button" onClick={() => onClick(text)}>
        `AC`
      </button>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
