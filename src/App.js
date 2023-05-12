import "./styles.css";
import useFetch from "./components/useFetch";
import Todos from "./components/Todos";


const FETCH_URL = "https://jsonplaceholder.typicode.com/todos";

export default function App() {
  const {data, loading, error} = useFetch(FETCH_URL);

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
      {data && <Todos data={data} />}
    </div>  
  );
}
