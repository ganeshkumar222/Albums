import React, { Component } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Image extends Component {

    constructor(props) {
        super(props);
        this.name = "Jack";
        this.state = { // state should be assigned an Object Literal with relevant attributes
            albumarray: '',
            usersarray: ''
        };
    }

    componentDidMount() {
        axios
            .get("http://jsonplaceholder.typicode.com/albums")
            .then(response => {
                console.log(response.data);
                this.setState({ albumarray: response.data })
            })
            .catch(error => {
                console.log("error");

            });

        axios
            .get("http://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data);
                this.setState({ usersarray: response.data })
            })
            .catch(error => {
                console.log("error");

            });

    }

    handleCheck = (e) => {
        this.sendData(e.currentTarget.dataset.id)



    }
    sendData = (heading) => {
       
        this.props.cab(heading);
    }

    
    albums = () => {
        var dummy = this.state.albumarray
        var dummy1=this.state.usersarray
        var albumitems = []
        for (var i of dummy) {
            var authorname="";
            for(var j of dummy1){
                if(i.userId===j.id){
                    authorname=j.name
                }

            }
            // console.log(i)
            albumitems.push(<li key={i.id} data-id={i.title} value={i.title} 
            onClick={this.handleCheck.bind(this)} className="list"><Link to={"/thumbs"} >{i.title}
            </Link><h6>{authorname}</h6></li>
            )
        }

        return albumitems


    }

    render() {
        return (
            <div>
                <h1 className="text-center">list of albums</h1>
                <ul className="listcontainer">{this.albums()}</ul>


            </div>
        );
    }
}
export default Image;
