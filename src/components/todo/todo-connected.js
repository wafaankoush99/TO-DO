import React, { useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {Badge} from 'react-bootstrap';
import useAjax from './ajax';
import './todo.scss';
import ContentSetting from './settings.jsx';

import Acl from './acl.jsx'
const ToDo = () => {
  const [list,_getTodoItems  , _toggleComplete , _addItem , deleteH , editor]= useAjax();
  useEffect (_getTodoItems , [_getTodoItems]);
  document.title = `Tasks left : ${list.filter((item) => !item.complete).length}`;
  return (
    <>
   
      <header>
      <h2>
        <Badge variant="dark"  style={{'width': '96%' ,'margin' : '2%' , 'boarder-radios' : 'none' , 'padding' : '20px 30px' , 'text-align' : 'left'}}>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </Badge>
      </h2>
      </header>
      <section className="todo">

        <Acl capability="create">
        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
        </Acl>

        <div>
          <ContentSetting />
        </div>
        <div>
          <TodoList list={list} handleComplete={_toggleComplete} deleteH = {deleteH} editor={editor} style={{  'width' : '30%'   }} />
        </div>
      </section>
    
    </>
  );
};

export default ToDo;