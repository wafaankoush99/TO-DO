

import React, { useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import useAjax from './ajax';
import './todo.scss';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  // const [list, setList] = useState([]);
  const [list, getToDoTasks, toggleHideShow, addNewItem, deleteTask] = useAjax();

  useEffect(getToDoTasks, [getToDoTasks]);
  document.title = `Tasks left  ${list.filter((item) =>  !item.complete).length}`;

  // console.log(document.title)

  return (
    <>
      <header className="mainHead">
          Home
      </header>
      <section>
          <h2 className="secHeadTodo">
            To Do List Manager ( {list.filter(item => !item.complete).length} )
            {/* There are  Items To Complete */}
          </h2>
        </section>
      <section className="todo">



        <div>

          <TodoForm handleSubmit={addNewItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleHideShow}
            deleteTask={deleteTask}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
