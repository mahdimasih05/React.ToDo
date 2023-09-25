import React from "react";

const Todos = ({todos, deleteTodos}) => {
     const TodoList = todos.length ? (
          todos.map(todo => {
               return(
                    <div className="center collection-item" key={todo.id} onClick={() => {deleteTodos(todo.id)}}>
                         <p>{todo.content}</p>
                    </div>
               )
          })
     ) : (
          <div>
               <p className="message center">there is no item!</p>
          </div>
     )
     return(
          <div className="container collection">
               {TodoList}
          </div>
     )
}

export default Todos;