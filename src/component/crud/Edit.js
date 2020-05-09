import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Edit extends Component {

  constructor(props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
        title: '',
        body: ''
 
    }
  }

  componentDidMount() {
    axios.get('http://localhost/laravel-ract/test/'+this.props.match.params.id)
    // axios.get('http://localhost/laravel-ract/test/'+this.props.obj.id)
    // axios.get('http://localhost/laravel-ract/products/${this.props.match.params.id}/edit')
      .then(res => {
       
        this.setState({
          title: res.data.title,
          body: res.data.body,
  
        });
      })

      .catch((error) => {
        console.log(error);
      })
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value })
  }



  onSubmit(e) {
    e.preventDefault()

    const productObject = {
      title: this.state.title,
      body: this.state.body,

    };

    axios.put('http://localhost/laravel-ract/products/'+this.props.match.params.id, productObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/List')
  }


  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} />
        </Form.Group>

        <Form.Group controlId="Body">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" value={this.state.body} onChange={this.onChangeBody} />
        </Form.Group>


        <Button variant="danger" size="lg" block="block" type="submit">
          Update 
        </Button>
      </Form>
      {/* <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.title  }
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Body: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.body  }
                      onChange={this.onChangeBody}
                      />
                </div>
              
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form> */}
    </div>
    );
  }
}