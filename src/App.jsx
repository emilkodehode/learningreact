import { Header } from "./components/Header"
import { Employee } from "./components/Employee"
import { Card } from "./components/Card"
import { UserInfo } from "./components/UserInfo"
import { Pokemon } from "./components/Pokemon"
import { Post } from "./components/Post"
import Grid from "./components/Block"

import data from "./data/data.json"

//just me doing som excersize to get comfortable
import { people } from "./data/persons"


function App() {
  return(
    <div>
      <Grid/>
      <hr/>
      <Pokemon data="https://pokeapi.co/api/v2/pokemon/ditto" />
      <Header />
      <h1>single page application</h1>
      <hr />
    
      <h2>this is my people</h2>
      <Employee name={people[0].name} age={people[0].age}/>
      <Employee name={people[1].name} age={people[1].age}/>
      <Employee name={people[2].name} age={people[2].age}/>
      <hr />
      <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nemo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nemo.</p>
      </Card>
      <hr />
      <Card>
        <p>Lorem ip adipisicing elit. Earum, nemo.</p>
        <p>Lorem ipsum dolor sit amejfajsnladnljasldjnlt consectetur adipisicing elit. Earum, nemo.</p>
      </Card>
      <hr />
      <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nemo.</p>
        <p>Lorem ipdipisicing elit. Earum, nemo.</p>
      </Card>
      <hr />
      <UserInfo data={people} />
      <hr />
      <hr />
      <Post data={data}/>
    </div>
  )
}



export default App