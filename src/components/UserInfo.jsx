import { useState } from "react"

export function UserInfo({data}){
    let elements = []
for (const user of data) {
    const {name,age,id} = user
    const [newAge, setNewAge] = useState(age)
    function handleClick(){
        setNewAge( newAge + 1)
    }
        elements.push(<h1 onClick={handleClick} key={id}>my name is {name} and my age is {newAge}</h1>)
    }
    return elements
}