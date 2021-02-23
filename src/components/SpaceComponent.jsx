import React, { useState } from 'react';

const PlayerXtile = ({setPlayerXorO, playerXorO}) => {
    return(
        <div
        style={{
            backgroundColor: 'red',
            cursor: 'pointer',
            onHover: 'purple',
            height: '50px',
            width: '80px',
            border: 'lightGrey',
            text: 'X'
        }}
     

    >X</div>

    )
}

const PlayerOtile = ({setPlayerXorO, playerXorO}) => {
    return(
        <div
        style={{
            backgroundColor: 'blue',
            cursor: 'pointer',
            onHover: 'purple',
            height: '50px',
            width: '80px',
            border: 'lightGrey',
            text: 'X'
        }}
     

    >O</div>

    )

}
const EmptyPlayingSpace = ({setPlayerXorO, playerXorO, setHasBeenClicked, setLocalXorO}) => {

const handleClick = () => {
    setHasBeenClicked(true)
    {playerXorO === 'X' ? setLocalXorO('O') : setLocalXorO('X')}
    {playerXorO === 'X' ? setPlayerXorO('O') : setPlayerXorO('X')}
    
    
    return(
        <div
        style={{
            backgroundColor: 'grey',
            cursor: 'pointer',
            onHover: 'purple',
            height: '50px',
            width: '80px',
            border: 'lightGrey',
            text: 'X'
        }}
        onClick={handleClick}
        
></div>

)
}

const SpaceComponent = ({playerXorO, setPlayerXorO}) => {
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const [localXorO, setLocalXorO] = useState(null)
    
        
//   console.log(playerXorO)


    


return(
    <div>
        {!hasBeenClicked && <EmptyPlayingSpace setHasBeenClicked={setHasBeenClicked} setLocalXorO={setLocalXorO}/>}
        {hasBeenClicked && localXorO === 'X' && <PlayerXtile setPlayerXorO={setPlayerXorO} playerXorO={playerXorO}/>}
        {hasBeenClicked && localXorO === 'O' && <PlayerOtile setPlayerXorO={setPlayerXorO} playerXorO={playerXorO}/>}

    </div>
)
}



export default SpaceComponent;
