import React from "react";
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
    let desiredBlocks = 9
    let blocks = []
    for (let i = 0; i < desiredBlocks; i++) {
        let block = <div className="block">i'm a block</div>
        blocks.push(block)
    }
    
    return(
        blocks
    )
}


function handleClick(){

}