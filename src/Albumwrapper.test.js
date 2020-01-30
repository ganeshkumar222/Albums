import React from 'react';
import Albumwrapper from "./Albumwrapper"
import { shallow } from 'enzyme';

describe("Albumwrapper", () => {
  it("rendering of component", () => {
    const wrapper = shallow(<Albumwrapper />);
  });
  it("checking for ul element", () => {
    const wrapper = shallow(<Albumwrapper />);
    expect(wrapper.find('.listcontainer')).toBeDefined();
  });
  it("checking for li element", () => {
    
    const wrapper = shallow(<Albumwrapper />);
    const componentInstance = wrapper.instance();
    componentInstance.albums()
    expect(wrapper.find('.list')).toBeDefined();
  });
});

