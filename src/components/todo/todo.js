import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import { useState } from 'react';
import { useEffect } from 'react';
import { Badge } from 'react-bootstrap'

import './todo.scss';

// class ToDo extends React.Component {

function ToDo(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         list: [],
    //     };
    // }

    const [list, setList] = useState([]);

    const addItem = (item) => {
        item._id = Math.random();
        item.complete = false;
        setList([...list, item]);
    };

    const toggleComplete = id => {

        let item = list.filter(i => i._id === id)[0] || {};

        if (item._id) {
            item.complete = !item.complete;
            let listt = list.map(listItem => listItem._id === item._id ? item : listItem);
            setList( listt );
        }

    };

    useEffect(() => {


        let listtt = [
            { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A', duedate: '2021-06-27' },
            { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A', duedate: '2021-06-27' },
            { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B', duedate: '2021-06-27' },
            { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C', duedate: '2021-06-27' },
            { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B', duedate: '2021-06-27' },
        ];

        setList( listtt );

    }, [])

    const deleteTask = id => {
        let listttt = list.filter((it) => it._id !== id) || {}
        setList(listttt)
    }

    const editTask = (text, id) => {
        let task = list.filter((it) => it._id === id)[0] || {}

        if (task) {
            task.text = text;
            let listtttt = list.map(it => {
                if (it._id === id) {
                    return task;
                }

                else {
                    return it;
                }
            })

            setList(listtttt)
        }
    }

    document.title = `Tasks left : ${list.filter((it) => !it.complete).length}`;


    // render() {
    return (
        <>
            <header>
                <h2>
                    {/* There are {this.state.list.filter(item => !item.complete).length} Items To Complete */}
                    There are <Badge variant="secondary">{list.filter(item => !item.complete).length} </Badge> Items To Complete

                </h2>
            </header>

            <section className="todo">

                <div>
                    <TodoForm handleSubmit={addItem} />
                </div>

                <div>
                    <TodoList
                        list={list}
                        handleComplete={toggleComplete}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                </div>
            </section>
        </>
    );
}
// }


// }

export default ToDo;

