// import React from 'react';
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

// // class TodoForm extends React.Component {
// function TodoForm(props) {

//     //   constructor(props) {
//     //     super(props);
//     //     this.state = { item: {} };
//     //   }

//     const [item, setItem] = useState({})

//     const handleInputChange = e => {
//         // this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
//         setItem({ ...item, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         e.target.reset();
//         // this.props.handleSubmit(this.state.item);
//         props.handleSubmit(item);
//         // const item = {};
//         // this.setState({ item });
//         setItem({})
//     };

//     // render() {
//     return (
//         <>
//             {/* <h3>Add Item</h3>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         <span>To Do Item</span>
//                         <input
//                             name="text"
//                             placeholder="Add To Do List Item"
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <label>
//                         <span>Difficulty Rating</span>
//                         <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
//                     </label>
//                     <label>
//                         <span>Assigned To</span>
//                         <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
//                     </label>
//                     <button>Add Item</button>
//                 </form> */}
//             <h3>Add Item</h3>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId="fromBasicEmail">
//                     <Form.label>
//                         <span>To Do Item</span>
//                         <Form.Control
//                             name="text"
//                             placeholder="Add To Do List Item"
//                             onChange={handleInputChange}
//                         />
//                     </Form.label>
//                 </Form.Group >

//                 <Form.Group controlId="formBasicEmail" >

//                     <Form.label>
//                         <span>Difficulty Rating</span>
//                         <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} variant="info" />
//                     </Form.label>
//                     {/* <label></label> */}
//                 </Form.Group>


//                 <Form.Group controlId="formBasicEmail">
//                     <Form.label>
//                         <span>Assigned To</span>
//                         <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
//                     </Form.label>
//                 </Form.Group>


//                 <Form.Group controlId="formBasicEmail" >
//                     <Form.label>
//                         <span>Due Date</span>
//                         <Form.Control type="date" name="dueDate" onChange={handleInputChange} />

//                     </Form.label>

//                 </Form.Group>


//                 <Button variant="secondary" >Add Item</Button>
//             </Form>
//         </>
//     );
// }
// // }

// // }

// export default TodoForm;

import React from 'react';
import { useState } from 'react';
import  { Button } from 'react-bootstrap';
import { Form} from  'react-bootstrap'
function TodoForm(props) {

  const [item,setItem] = useState ({})

  const handleInputChange = e => {
   setItem( {...item, [e.target.name]: e.target.value } );
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>To Do Item</span>
        <Form.Control
          name="text"
          placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        </Form.Group>

          <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>Difficulty Rating</span>
        <Form.Control variant="info" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        </Form.Group>


        <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>Assigned To</span>
        <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
        <Form.Label>
        <span>Due Date</span>
        <Form.Control type="date" name="duedate"  onChange={handleInputChange} />
        </Form.Label>
        </Form.Group>

        <Button type="submit" variant="success">Add Item</Button >
      </Form>
    </>
  );
  
}

export default TodoForm;
