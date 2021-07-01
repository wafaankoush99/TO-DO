

import React from 'react';
// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'

import useForm from './useForm'


import ContentSetting from './settings.jsx'

function TodoForm(props) {

  const [handleInputChange, handleSubmit] = useForm(callback);

  function callback(data){
    props.handleSubmit(data);

  }


  // const [item, setItem] = useState({})

  // const handleInputChange = e => {
  //   setItem({ ...item, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(item);
  //   setItem({});
  // };

  return (
    <>

      <Form onSubmit={handleSubmit}>
      <h4 className="fromform">Add To Do Item</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <span className="fromform" >To Do Item</span>
            <Form.Control
            className="forminputs" 
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <span className="fromform">Assigned To</span>
            <Form.Control className="forminputs" type="text" name="assignee" placeholder="Assigned Name" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>



        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <span className="fromform">Difficulty Rating</span>
            <Form.Control className="range" variant="info" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>



        {/* <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <span className="fromform">Due Date</span>
            <Form.Control type="date" name="duedate" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group> */}

        <Button className="addItemfromFormbtn" type="submit" variant="primary">Add Item</Button >
      </Form>
      <ContentSetting />
    </>
  );

}

export default TodoForm;
