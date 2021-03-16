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

const EmptyPlayingSpace = (handleClick) => {
    return(
        <div
            style={{
                backgroundColor: 'grey',
                cursor: 'pointer',            
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
    squaresArray, 
    index
}) => {
    const [localXorO, setLocalXorO] = useState(null)
    const [hasBeenClicked, setHasBeenClicked] = useState(false)  
    // const [x] = squaresArray[i];
    
    const handleClick = () => {
        setHasBeenClicked(true);
        playerXorO === "X" && xSpacesArray.splice(xSpacesArray[index] = "X", 1, "X")
        playerXorO === "O" && xSpacesArray.splice(xSpacesArray[index] = "O", 1, "X")
        playerXorO === "X" && hasBeenClicked === false && setLocalXorO("X")
        playerXorO === "X" && hasBeenClicked === false && setPlayerXorO("O")
        playerXorO === "O" && hasBeenClicked === false && setLocalXorO("O")
        playerXorO === "O" && hasBeenClicked === false && setPlayerXorO("X")
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