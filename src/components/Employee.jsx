export function Employee(props){
    const {name, age} = props
    return(
        <>
        <h2>{name}</h2>
        <p>{age}</p>
        </>
    )
}