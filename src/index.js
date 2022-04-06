import React from 'react'
import ReactDom from 'react-dom'
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
      <div className='container-fluid d-flex col-6'>
        <input type='text' className='form-control' id='' />
        <button type='button' className='btn btn-primary'>
          Add
        </button>
        <button type='button' className='btn btn-warning'>
          Get Task
        </button>
        <section className='table-wrapper'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>No.</th>
                <th>To Do</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </section>
      </div>
    </>
  )
}

// Render's components
ReactDom.render(<ToDoList />, document.getElementById('root'))
