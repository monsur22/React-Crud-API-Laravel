import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import StudentTableRow from './StudentTableRow';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
    // this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost/laravel-ract/products')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <Child obj={res} key={i} />;
    });
  }
//   delete() {
    
//     axios.DELETE('http://localhost/laravel-ract/products/'+this.props.obj.id)
//         .then((res) => {
//             console.log('Successfully deleted!')
//         }).catch((error) => {
//             console.log(error)
//         })
// }

  render() {
    return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
        {this.DataTable()} 
        
        </tbody>
      </Table>
    </div>
    );
  }
}
class Child extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}

delete() {
    axios.get('http://localhost/laravel-ract/delete/'+this.props.obj.id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
        // this.props.history.push('/List')
}

    render() {
  
  
      return(
          <tr>
     
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.body}</td>
      
        <td>
            <Link className="edit-link" to={  "/Edit/" + this.props.obj.id }>
                Edit
            </Link>
            <Button onClick={this.delete} size="sm" variant="danger">Delete</Button>
        </td>
        </tr>
     
      );
    }
  }

