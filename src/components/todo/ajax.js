import axios from 'axios';

import { useState } from 'react';
let todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const useAjax = () => {
  const [list, setList] = useState([]);

  const addNewItem = (item) => {
    item.due = new Date();
    const fetch = () => {

      axios.post(todoAPI, item, {
        mode: '',
        cache: '',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)

      })

        .then(res => {
          setList([...list, res.data])
        })
        .catch(console.error);

    }

    fetch();
  }

  const toggleHideShow = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      const url2 = `${todoAPI}/${item._id}`
      const fetch = async () => {
        axios.put(url2, item, {
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(item),
          cache: '',
          mode: '',

        })
          .then(res => setList(list.map(list => list._id === item._id ? res.data : list)))
          .catch(console.error);
      }

      fetch();
    }

  }

  const getToDoTasks = () => {
    const fetch = async () => {
      let res = await axios.get(todoAPI, {
        headers: { 'Content-Type': 'application/json' },
        cache: '',
        mode: '',

      })
      setList(res.data.results)
    }
    fetch();

  }

  const deleteTask = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};
    const url2 = `${todoAPI}/${item._id}`
    const fetch = async () => {
      axios.delete(url2, {
        headers: { 'Content-Type': 'application/json' },
        cache: '',
        mode: '',

      }).then((res) => setList(list.filter((it) => it._id !== res.data.id) || {}))

    }
    fetch();

  }


  return [list, getToDoTasks, toggleHideShow, addNewItem, deleteTask];

}

export default useAjax;