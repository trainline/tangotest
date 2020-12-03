import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';


describe('Enzyme test', () => {
  const wrapped = shallow(<App />);
  it('should render the App Component correctly', () => {   
    expect(wrapped).toMatchSnapshot();
  });
});

describe('RTL test', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})

