import { useEffect, useState } from "react";
import axios from "axios";


export function Pokemon(prop){
    //const respone = await axios.get()
    const [data, setData] = useState([])
    
    const fetchdata = async ()=> {
    const result = await axios(prop.data,);
    setData(result.data)}
    
    useEffect(() => {fetchdata()},[])
    
    console.log(typeof data)
    
    const {name} = data
    
    console.log(name)
    
    return(
        <div>
            {data === null ? <p> Loading... </p> : <p> im done? {data.name} </p>}
        </div>
    )
}