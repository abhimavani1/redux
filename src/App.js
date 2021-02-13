import React, { useState } from 'react'
import './App.css';
function App() {
  const [id, setID] = useState(null)
  const [todo, setTodo] = useState()
  const [addTodo, setAddTodo] = useState([])
  var getdata = []
  getdata = JSON.parse(localStorage.getItem('title'))

  var getTitle = [getdata]
  function submitTodo() {
    setTodo("")
    setAddTodo([...addTodo, todo])
    localStorage.setItem('title', JSON.stringify([...addTodo, todo]))
  }
  function deleteTodo(i) {
    setAddTodo(getdata.filter((item, index) => index !== i))
    localStorage.setItem('title', JSON.stringify([...addTodo]))

  }
  function editTodo(index, item) {
    setID(index)
    setTodo(item)
  }
  function editData() {
    getdata[id] = todo

    localStorage.setItem('title', JSON.stringify([...getdata]))
    setID(null)
    setTodo("")
  }

  console.log(getTitle);
  console.log(getdata, "sdgh");

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-10 pr-0">
          <input type="text" className="form-control" value={todo} onChange={e => setTodo([e.target.value])} placeholder="Enter Value" />
        </div>
        <div className="col-md-2  pl-1">
          <button className="btn btn-primary" onClick={() => id == null ? submitTodo() : editData()} >{id === null ? "add" : "edit"}</button>

        </div>
        <div className="col-md-11 mt-5">
          <table className="table table-bordered">
            {getdata.length > 0 && getdata.map((item, index) => (
              <tr key={index}> <td width="100">{index}</td><td>{item}</td><td width="170"> <button className="btn btn-outline-danger" onClick={() => deleteTodo(index)}>Delete</button> <button className="btn btn-outline-info" onClick={() => editTodo(index, item)}>Edit</button></td></tr>))}
          </table>
        </div>

      </div>

    </div>
  );
}


export default App;


// import React, { useEffect } from 'react'
// import Countss from './Count'
// import { createStore } from 'redux'
// import { Provider } from "react-redux"

// export default function App() {


//   function reducer(state, action) {

//     switch (action.type) {
//       case "inecrement":
//         return {
//           count: state.count + 1
//         };
//       case "dnecrement":
//         return {
//           count: state.count - 1
//         }
//       default:
//         return {
//           count: 0
//         }
//     }

//   }

//   const store = createStore(reducer);
//   console.log("store", store);

//   return (
//     <Provider store={store}>
//       <Countss />
//     </Provider>

//   )
// }
