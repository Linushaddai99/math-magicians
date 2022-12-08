import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CalculatorPage from '../Pages/CalculatorPage';
import Calculator from '../Calculator/Calculator';
import Home from '../Pages/Home';
import Quote from '../Pages/Quote';
import Navbar from '../../Navbar';

describe('testing components', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the home component correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the quote component correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Navbar component correctly', async () => {
    render(<Navbar />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/Home/)).toMatchSnapshot();
  });

  it('stimulate users interaction', () => {
    render(<Calculator />);
    expect(screen.queryByText('AC')).toBeTruthy();
    fireEvent.click(screen.getByText(/AC/i));
  });
});
