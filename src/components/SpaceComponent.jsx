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

const EmptyPlayingSpace = ({setPlayerXorO, playerXorO, setHasBeenClicked, setLocalXorO}) => {
    
  
    
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

const SpaceComponent = ({playerXorO, setPlayerXorO, }) => {
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const [localXorO, setLocalXorO] = useState(null)

    const handleClick = () => {
        setHasBeenClicked(true)
       
        {playerXorO === 'X' && hasBeenClicked === false ? setLocalXorO('O') : setLocalXorO('X')}
        {playerXorO === 'X' && hasBeenClicked === false ? setPlayerXorO('O') : setPlayerXorO('X')}
    }
        
    
    return(
        <div onClick={handleClick}>
        {!hasBeenClicked && <EmptyPlayingSpace setHasBeenClicked={setHasBeenClicked} setLocalXorO={setLocalXorO} setPlayerXorO={setPlayerXorO} playerXorO={playerXorO} localXorO={setLocalXorO}/>}
        {hasBeenClicked && localXorO === 'X' && <PlayerXtile setPlayerXorO={setPlayerXorO} playerXorO={playerXorO}/>}
        {hasBeenClicked && localXorO === 'O' && <PlayerOtile setPlayerXorO={setPlayerXorO} playerXorO={playerXorO}/>}
        

    </div>
    )
}

export default SpaceComponent;



    




