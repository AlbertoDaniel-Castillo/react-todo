const TodoTable = ({currentTodos}) => {
    return (
        <table border="1">
            <tbody className="table-content">
              <tr>
                <th>#</th>
                <th style={{fontWeight: "bold"}}>User</th>
                <th style={{fontWeight: "bold"}}>Description</th>
                <th style={{fontWeight: "bold"}}>Completed</th>
              </tr>
              {currentTodos.map((todo) => (
                <tr
                  key={todo.id}
                  style={{ backgroundColor: todo.completed ? "white" : "gray" }}
                >
                  <th>{todo.id}</th>
                  <th>{todo.userId}</th>
                  <th className="task-title">{todo.title}</th>
                  <th>{todo.completed ? "✔" : "❌"}</th>
                </tr>
              ))}
            </tbody>
          </table>
    );
}
 
export default TodoTable;