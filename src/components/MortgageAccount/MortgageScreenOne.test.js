import React from 'react';
import { shallow , mount } from 'enzyme';
import MortgageScreenOne from './MortgageScreenOne';


describe('When Controlled  component is given', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MortgageScreenOne />);
  });


  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

});
