
import React from 'react'

import { useState } from 'react'
import If from './If'

import { Button } from 'react-bootstrap'
import { Form, Badge, Toast } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


// class TodoList extends React.Component {
function TodoList(props) {
    // render() {

    const [flag, setFlag] = useState(false)
    const [id, setId] = useState('')

    const toggle = id => {
        setFlag(!flag)
        setId(id)
    }

    const editTask = e => {
        e.preventDefault()
        toggle(id)

        let update = e.target.text.value
        props.editTask(update, id)
    }

    return (
        <>
            {/* <ListGroup> */}

            {props.list.map(item => (
                // <ListGroup.Item action variant={item.complete ? 'dark' : 'light'}
                //     className={`complete-${item.complete.toString()}`}
                //     key={item._id}
                // >
                //     <Badge pill variant={item.complete ? 'danger' : 'success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}


                //     <div className="btns">

                //         {/* <Button variant="info" onClick={() => toggle(item._id)} value={item._id}>Edit</Button>{' '} */}
                //         <Button variant="light" onClick={() => props.deleteTask(item._id)} value={item._id}>X</Button>

                //     </div>

                //     <br></br>
                //     <br></br>

                //     <span onClick={() => props.handleComplete(item._id)}>
                //         {item.text} : {item.assignee} , difficulty :  {item.difficulty} , due : {item.duedate}
                //     </span>

                //     <br></br>

                <Toast
                    onClose={() => props.deleteTask(item._id)} value={item._id}
                >
                    {/* <Button variant="light" onClick={() => props.deleteTask(item._id)} value={item._id}>X</Button> */}

                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">
                            <span onClick={() => props.handleComplete(item._id)}>

                                <Badge className="pendingtoggle" pill variant={item.complete ? 'danger' : 'success'} > {item.complete ? 'completed' : 'pending'} </Badge>{' '}
                                {item.assignee}
                            </span>

                        </strong>
                        {/* <Button variant="light" onClick={() => props.deleteTask(item._id)} value={item._id}>X</Button> */}
                        {/* <small>11 mins ago</small> */}
                    </Toast.Header>
                    <Toast.Body>
                        {item.text}

                        <br></br>
                        <div className="difff">
                            Difficulty:  {item.difficulty}

                        </div>

                        {/* , due : {item.duedate} */}
                    </Toast.Body>
                </Toast>


                // </ListGroup.Item>
            ))}
            {/* </ListGroup> */}

            <If condition={flag}
            >
                <Form onSubmit={editTask}>

                    <Form.Label>
                        <span>Edit Task</span>
                        <Form.Control type="text" name="text" />
                    </Form.Label>
                    <Button variant="outline-secondary" type='submit' >Edit</Button>

                </Form>

            </If>

        </>

    )
    // }
    // }
}


export default TodoList

