import { useRef, useState } from "react";
import Pagination from "./Pagination";
import HeaderTodo from "./HeaderTodo";
import TodoTable from "./TodoTable";

const Todos = ({data}) => {
    const [todos, setTodos] = useState(data)
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(10);
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef();

    //Calculating the number of todos per section
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    //Using this const now to bring the data instead of full data
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    
    const paginate = (pageNumber, index) => {
        setCurrentPage(pageNumber);
        setActiveIndex(index);
    };

        return (
            <div>
                <HeaderTodo inputRef={inputRef} data={todos} setTodos={setTodos}  />
                <Pagination todosPerPage={todosPerPage} totalTodos={todos.length} paginate={paginate} activeIndex={activeIndex} />
                <TodoTable currentTodos={currentTodos}/>
            </div>
        );
    }
    
export default Todos;