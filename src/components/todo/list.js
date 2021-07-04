
// import React from 'react'

import { useState } from 'react'
import If from './If'

// import { Button } from 'react-bootstrap'
import { Badge, Toast } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { SettingsContext } from './setting-context';
import { Pagination } from 'react-bootstrap'

import React, { useContext } from 'react';

// class TodoList extends React.Component {
function TodoList(props) {
    // render() {

    const [flag, setFlag] = useState(false)
    const [id, setId] = useState('')

    let list = props.list

    const context = useContext(SettingsContext)

    const maxItems = context.itemPerPage;

    const [currentPage, setCurrentPage] = useState(1);

    if (context.finished) {
        list = list.filter((task) => !task.complete);
    }

    // let numOfPages = list.length / maxItems + 1;
    const last = currentPage * context.itemPerPage;
    const first = last - context.itemPerPage;


    if (context.sortBy === 'difficulty') {
        list.sort((a, b) => {
            if (a.difficulty && b.difficulty) {
                if (a.difficulty > b.difficulty) return -1
                else if (a.difficulty < b.difficulty) return 1
                else if (a.difficulty === b.difficulty) return 0
            }
        })
    }
    else if (context.sortBy === 'assignee') {
        list.sort((a, b) => {
            if (a.assignee && b.assignee) {
                if (a.assignee.toLowerCase() > b.assignee.toLowerCase()) return 1
                else if (a.assignee.toLowerCase() < b.assignee.toLowerCase()) return -1
                else if (a.assignee.toLowerCase() === b.assignee.toLowerCase()) return 0
            }
        })
    }
    else if (context.sortBy === 'text') {
        list.sort((a, b) => {
            if (a.text && b.text) {
                if (a.text.toLowerCase() > b.text.toLowerCase()) return -1
                else if (a.text.toLowerCase() < b.text.toLowerCase()) return 1
                else if (a.text.toLowerCase() === b.text.toLowerCase()) return 0
            }
        })
    }

    let currentTasks = list.slice(first, last);

    let numOfPages = currentTasks.length / maxItems + 1;

    context.setTaskSum(list.length);

    let active = currentPage;
    let items = [];
    for (let number = 1; number <= numOfPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


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


            <div className="toastttt" >
                {currentTasks.map(item => (
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

            </div>
            {/* </ListGroup> */}

            <section className='pagenation'>

                <Pagination>
                    <Pagination.Prev

                        disabled={active === 1 ? true : false}
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                        }}
                    />
                    {items}
                    <Pagination.Next
                        disabled={active > numOfPages - 1 ? true : false}
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    />
                </Pagination>
            </section>


            <If condition={flag}
            >
                {/* <Form onSubmit={editTask}>

                    <Form.Label>
                        <span>Edit Task</span>
                        <Form.Control type="text" name="text" />
                    </Form.Label>
                    <Button variant="outline-secondary" type='submit' >Edit</Button>

                </Form> */}

            </If>

        </>

    )
    // }
    // }
}


export default TodoList

