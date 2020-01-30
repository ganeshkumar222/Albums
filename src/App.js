import React, { Component } from 'react';
import Albumwrapper from './Albumwrapper';
import { Route,  Switch } from 'react-router-dom'
import Imageviewer from './Imageviewer'
class App extends Component {
  constructor() {
    super();  
    this.name = "Jack";
    this.state = { // state should be assigned an Object Literal with relevant attributes
        title:''
    };
}

  callbackFunction = (childData) => {
    this.setState({title: childData})
    
}


    render() {
        return (
            <div>     
           <Switch>
          <Route exact path="/" component={() => <Albumwrapper cab={this.callbackFunction}></Albumwrapper>} /> 
          <Route exact path="/thumbs" component={() => <Imageviewer albumtitle={this.state.title} />}></Route>
        </Switch> 
        </div>
           
        );
    }
}
export default App;