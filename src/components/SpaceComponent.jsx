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
   
const SpaceComponent = ({playerXorO, setPlayerXorO, setWinningConditions, index, setOTracker, setXTracker, oTracker, xTracker}) => {
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const [localXorO, setLocalXorO] = useState(null)
     
    const handleClick = () => {
        setHasBeenClicked(true);
        playerXorO === 'X' ? setLocalXorO('O') : setLocalXorO('X');
        playerXorO === 'X' ? setPlayerXorO('O') : setPlayerXorO('X');
        playerXorO === 'O' ? setXTracker([...xTracker, index]) : setOTracker([...oTracker, index])

    }

    
    
    return(
        <div onClick={handleClick}>
        {!hasBeenClicked && <EmptyPlayingSpace />}
        {hasBeenClicked && localXorO === 'X' && <PlayerXtile setPlayerXorO={setPlayerXorO} playerXorO={playerXorO}/>}
        {hasBeenClicked && localXorO === 'O' && <PlayerOtile setPlayerXorO={setPlayerXorO} playerXorO={playerXorO}/>}

    </div>
    )
}

export default SpaceComponent;
   
        
    
  
    




    




