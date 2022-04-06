import React from 'react'
import ReactDOM from 'react-dom/client'
// CSS import
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// JSX RULES
// return single element
// div , section , article or fragment
// user camelCase for html attributes
// className instead of class
// close every element
// formatting

function ToDoList() {
  return <ToDoListContents />
}
const ToDoListContents = () => {
  return (
    <>
      <div className='container-fluid d-flex col-6 main pt-5'>
        <div className="input">
          <input type='text' className='form-control' id='' />
          <button type='button' className='btn btn-primary'>
            Add
          </button>
          <button type='button' className='btn btn-warning'>
            Get Task
          </button>
        </div>
        <section className='table-wrapper mt-5'>
          <table className='table table-hover w-100'>
            <thead>
              <tr>
                <th>No.</th>
                <th>To Do</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cook</td>
                <td>Done</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  )
}

// Render's components
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ToDoList />)