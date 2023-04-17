export function Post(prop){
    const {data} = prop
    console.log(data)
  
    const users = data.map(user => <UserComp key={user.id} data={user} />)
  
    return users
  }
  
function UserComp(prop){
    const {data} = prop
    return (
    <>
    <p> hello my name is {data.name}</p>
    <p>my phone us {data.phone}</p>
    <p>my email is {data.email}</p>
    </>
    )
}