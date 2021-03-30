import React, { useState } from 'react';

const PlayerXtile = () => {
    return(
        <div
            style={{
                backgroundColor: 'red',
                width: '10rem',
                height: '10rem',
                border: '1px solid black',
                textAlign: 'center',
                verticalAlign: 'middle',
                lineHeight: '10rem',
                color: 'white',
                fontSize: '40px'
            }}
        >
            X
        </div>
    )
}
     
const PlayerOtile = () => {
    return(
        <div
            style={{
                backgroundColor: 'blue',
                width: '10rem',
                height: '10rem',
                border: '1px solid black',
                textAlign: 'center',
                verticalAlign: 'middle',
                lineHeight: '10rem',
                color: 'white',
                fontSize: '40px'
            }}
        >
            O
        </div>
    )
}

const EmptyPlayingSpace = () => {
    return(
        <div
        style={{
            backgroundColor: 'grey',
            cursor: 'pointer',
            hover: 'purple',
            height: '10rem',
            width: '10rem',
            border: '1px solid black',
        }}
        >
        </div>
    )
}

const SpaceComponent = ({
    playerXorO, 
    setPlayerXorO, 
    xSpacesArray,
    oSpacesArray, 
    squaresArray, 
    index,
    setWinningConditions
}) => {
    const [localXorO, setLocalXorO] = useState(null)
    const [hasBeenClicked, setHasBeenClicked] = useState(false)  
    
    const handleClick = () => {
        setHasBeenClicked(true);
        playerXorO === "X" && xSpacesArray.splice(xSpacesArray[index] = index, 1, 'X')
        playerXorO === "O" && oSpacesArray.splice(oSpacesArray[index] = index, 1, "O")
        playerXorO === "X" && hasBeenClicked === false && setLocalXorO("X")
        playerXorO === "X" && hasBeenClicked === false && setPlayerXorO("O")
        playerXorO === "O" && hasBeenClicked === false && setLocalXorO("O")
        playerXorO === "O" && hasBeenClicked === false && setPlayerXorO("X")

        // for(let x = 0; x < xSpacesArray.length; x++){
        // if(xSpacesArray.indexOf("X") === 0 && xSpacesArray.indexOf("X") === 1 && xSpacesArray.indexOf("X") === 2){
        //  setWinningConditions(true)
        // }}

    }

    return(
        <div onClick={handleClick}>
            {!hasBeenClicked && <EmptyPlayingSpace/>}
            {hasBeenClicked === true && localXorO === 'X' && <PlayerXtile />}
            {hasBeenClicked === true && localXorO === 'O' && <PlayerOtile />}
        </div>
    )
}

export default SpaceComponent;

