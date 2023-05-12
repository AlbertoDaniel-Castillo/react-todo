import { useState } from "react";

const HeaderTodo = ({inputRef, data, setTodos }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
      };
    
      const handleInputKey = (e) => {
        if (e.key === "Enter") {
          createNewTodo();
        }
      };
    
      const createNewTodo = () => {
        if (newTodo === "") return;
        const newRow = {
          id: Math.floor(Math.random() * 9999),
          userId: Math.floor(Math.random() * 9999),
          title: newTodo,
          completed: false
        };
        setTodos([newRow, ...data]);
        setNewTodo("");
        inputRef.current?.focus();
      };

    return (
        <div className="home-section">
          <header className="header">
            <div>
              <input
                placeholder="descripcion"
                ref={inputRef}
                value={newTodo}
                onChange={handleInputChange}
                onKeyUp={handleInputKey}
                type="text"
              ></input>
              <button onClick={createNewTodo}>Crear</button>
            </div>
            <div>
              <button onClick={event =>  window.location.href='/'} >Refrescar</button>
            </div>
          </header>
        </div>
    );
}
 
export default HeaderTodo;