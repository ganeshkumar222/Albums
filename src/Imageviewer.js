import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';


class Imageviewer extends Component {

    constructor(props) {
        super(props);  
        this.name = "Jack";
        this.state = { 
            albumtitle:this.props.albumtitle,
            fullimage:"",
            thumbnail:true
            
        };
    }

    
    biggerimage=()=>{
        this.setState({thumbnail:false})
        this.setState({fullimage:<img src="https://via.placeholder.com/600/92c952" alt={this.state.albumtitle}  />})

    }
    
 
    render() {

        return (
            <div>
    <h1 className="text-center">{this.state.albumtitle}</h1>
    
        {this.state.thumbnail?(<img onClick={this.biggerimage} src="https://via.placeholder.com/150/92c952" alt={this.state.albumtitle} thumbnail="true" />):(this.state.fullimage)}
        
            </div>
        );
    }
}
Imageviewer.propTypes = {
    albumtitle: PropTypes.string

  }
  Imageviewer.defaultProps = {
    albumtitle:"self realization"
}
export default Imageviewer;
