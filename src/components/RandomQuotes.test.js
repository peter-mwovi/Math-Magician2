import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<h3>Random quotes...</h3>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
