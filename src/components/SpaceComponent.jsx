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

const SpaceComponent = ({playerXorO, setPlayerXorO}) => {
    // const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const [localXorO, setLocalXorO] = useState(null)
    const [hasBeenClicked, setHasBeenClicked] = useState(false)

    const handleClick = () => {
        setHasBeenClicked(true)        
        {playerXorO === 'X' && !hasBeenClicked ? setLocalXorO('X') : setLocalXorO('O')}
        {playerXorO === 'O' && !hasBeenClicked ? setPlayerXorO('X') : setPlayerXorO('O')}
}
        
    console.log(SpaceComponent)
    console.log(handleClick)

    return(
        <div onClick={handleClick}>
        {!hasBeenClicked && <EmptyPlayingSpace/>}
        {hasBeenClicked === true && localXorO === 'X' && <PlayerXtile />}
        {hasBeenClicked === true && localXorO === 'O' && <PlayerOtile />}

    </div>
    )
}

export default SpaceComponent;