import axios from 'axios';

import { useState } from 'react';
let todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const useAjax = () => {
  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    const fetch = () => {

      axios.post(todoAPI, item, {
        mode: 'cors',
        cache: 'no-cache',
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

  const _toggleComplete = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      const url2 = `${todoAPI}/${item._id}`
      const fetch = async () => {
        axios.put(url2, item, {
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify(item),
          cache: 'no-cache',
          mode: 'cors',

        })
          .then(res => setList(list.map(listItem => listItem._id === item._id ? res.data : listItem)))
          .catch(console.error);

      }

      fetch();
    }

  }

  const _getTodoItems = () => {
    const fetch = async () => {
      let res = await axios.get(todoAPI, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-cache',
        mode: 'cors',

      })
      setList(res.data.results)
    }
    fetch();

  }

  const deleteH = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};
    const url2 = `${todoAPI}/${item._id}`
    const fetch = async () => {
      axios.delete(url2, {
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-cache',
        mode: 'cors',

      }).then((res) => setList(list.filter((item) => item._id !== res.data.id) || {}))

    }
    fetch();

  }


  return [list, _getTodoItems, _toggleComplete, _addItem, deleteH];

}

export default useAjax;