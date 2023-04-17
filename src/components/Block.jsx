import { useState } from "react"
import { Color } from "three"
import "../styles/boxgame.css"

/*
what is to much on an component. should i write it all in here?
say i want to make just a potential for grid and blcoks to be moved around if i write it all here it can be moved into any project i guess?
*/

export default function Grid(){
    return(
        <div className="gridblocks">
            <Block/>
        </div>
    )
}

function Block(){
    const [desiredBlocks, setDesiredBlocks] = useState(0)
    let blocks = []
    for (let i = 0; i < desiredBlocks; i++) {
        let block = <div className="block" style={{backgroundColor: `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256}`}}>i'm a block</div>

        blocks.push(block)
    }
    
    return(
        <>
        <input type="num" onChange={(e)=>{setDesiredBlocks(+e.target.value)}}/>
        if (blocks){blocks}
        </>
    )
}


function handleClick(){

}