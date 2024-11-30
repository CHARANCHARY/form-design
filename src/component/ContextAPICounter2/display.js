import { useContext } from "react";
import {store} from "./main"


function Display() {
    const [data] = useContext(store);
  return (
    <div>
        {data.map(
            item =>(
                <h1>{item.brandname}</h1>
        )
        )}
    </div>
  )
}

export default Display