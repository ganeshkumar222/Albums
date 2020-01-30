import React from 'react';
import Imageviewer from "./Imageviewer"
import { shallow } from 'enzyme';

describe("Imageviewer", () => {
  it("rendering of component", () => {
    const wrapper = shallow(<Imageviewer />);
  });
  it("checking for props of a component", () => {
    // const wrapper = shallow(<Imageviewer albumtitle={1}/>);
    // expect(wrapper.props.albumtitle).toEqual(1);
    const wrapper = shallow(<Imageviewer someProp={1}/>);
    expect(wrapper.props().someProp).toEqual(1);

  });
  it("checking for state component", () => {

    const wrapper = shallow(<Imageviewer />);
    wrapper.setState({thumbnail:false });
    expect(wrapper.state().fullimage).toBeDefined();
    

  });
});