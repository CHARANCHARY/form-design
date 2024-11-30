import { useContext,useState } from "react";
import { store } from "./main";


function DataInsert() {
  const [data, setData] = useContext(store);

  const [name , setName] = useState("");

  const hadleSubmit = (e) =>{
    e.preventDefault();
    setData([...data , {brandname : name}]);
    console.log(name);
    setName("");

  }

  return (
    <form onSubmit={hadleSubmit}>
        <input placeholder="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
  )
}

export default DataInsert